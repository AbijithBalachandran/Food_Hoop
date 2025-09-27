import bcrypt from 'bcrypt';
import { AuthService } from './auth.service';
import { UserModel ,IsUser} from '../models/userModel';
import { UserRepository } from '../ repositories/user.repository';
import { generate4digitOtp } from '../utils/generateOTP';
import { OTP , IsOtp } from '../models/otp.model';
import { generateSlug } from '../utils/generateSlug';
import { sendMailer } from '../utils/sendMailer';
import { IsTemp } from '../models/temp.model';


export class UserService {

     private userRepo = new UserRepository();
     private authService = new AuthService();

     // hasing password =============================================================

     private async hashPassword(password:string):Promise<string>{
          return bcrypt.hash(password,10)
     }

     // Register new user and genarating otp , sending mail with the otp ========================================

     async registerUser(data:{
          name:string,
          email:string,
          mobile:string,
          password:string
     }):Promise<{user:IsTemp}>{
          
          const existingUser = await this.userRepo.findExistingEmail(data.email);
          
          if (existingUser) {
               throw new Error('User Already Exist');
          }
          const slug = await generateSlug(data.name)

          const hashedPassword = await this.hashPassword(data.password);


          const user = await this.userRepo.createTemp({
               ...data,
               password:hashedPassword,
               slug:slug,
               role:'user'
          });

        

          const generateOtp = generate4digitOtp();

           const email = data.email;

           const createOtp = new OTP({
               email:email,
               otp:generateOtp
           });

          const saveOtp = await createOtp.save();

          await sendMailer(generateOtp.toString(),email);

          return {user}
     }

 
 //  insertin The otp ==============================================


     async verifyOtp(email: string, otp: number | string):Promise<boolean>{

         const foundOtp = await this.userRepo.findOtp(email);

           if(!foundOtp){
              return false;
           } 

           if (foundOtp.otp.toString() !== otp.toString()) {
               throw new Error("Invalid Otp or otp is Expired");
           }

           const tempUser = await this.userRepo.findEmail(email);


           if (!tempUser) {
                 throw new Error("user not found");
             }

            const tempUserObj = tempUser.toObject();

           await this.userRepo.createOrg({...tempUserObj});

           await this.userRepo.deleteOtp(email);
           await this.userRepo.deleteTempUser(email);

           return true;
     }


   // ====  Resend OTP =======================================
   
   async ResendOTP(email:string):Promise<boolean>{
       try {
      
         const tempUser = await this.userRepo.findEmail(email);
         if (!tempUser) {
            throw new Error("User not found or User Already Verified");
         };

         const otp = generate4digitOtp();

         const existingOTP = await this.userRepo.findOtp(email);
         if (existingOTP) {
            await OTP.updateOne({email},{otp,createdAt:new Date()});
         }else{
            const createOtp = new OTP({email,otp});
            await createOtp.save();
         }

         await sendMailer(otp.toString(),email);
         return true;

       } catch (error) {
        console.error(error);
        return false;
       }
   }

  // User Login ==============================================


  async loginUser(data:{
    
          email:string,
          password:string}):Promise<{user:IsUser;accessToken: string;refreshToken: string}>{

      const user = await this.userRepo.loginFindEmail(data.email);

      if (!user) {
          throw new Error('User not found .Please register ...........!');
      }

         const passwordCheck = await bcrypt.compare(data.password, user.password);

         if (!passwordCheck) {
           throw new Error("Invalid password...!");
         }

           const accessToken = this.authService.generateAccessToken({id:user.id});
           const refreshToken = this.authService.generateRefreshToken({id:user.id});
          const { password, ...userData } = user.toObject(); 
          return {user:userData,accessToken,refreshToken}

  }

       

}