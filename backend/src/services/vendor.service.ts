import bcrypt from 'bcrypt';
import { AuthService } from './auth.service';
import { UserModel ,IsUser} from '../models/userModel';
import { UserRepository } from '../ repositories/user.repository';
import { generate4digitOtp } from '../utils/generateOTP';
import { OTP , IsOtp } from '../models/otp.model';
import { generateSlug } from '../utils/generateSlug';
import { sendMailer } from '../utils/sendMailer';
import { IsTemp } from '../models/temp.model';

export class vendorService {

     private userRepo = new UserRepository();
     private authService = new AuthService();

     // hasing password =============================================================

     private async hashPassword(password:string):Promise<string>{
          return bcrypt.hash(password,10)
     }

     // Register new user and genarating otp , sending mail with the otp ========================================

     async registerVendor(data:{
          resturentName:string,
          licenceNumber:string,
          name:string,
          email:string,
          mobile:string,
          password:string
     }):Promise<{user:IsTemp}>{
          
          const existingUser = await this.userRepo.findExistingEmail(data.email);
          
          if (existingUser) {
               throw new Error('User Already Exist');
          }
          const slug = await generateSlug(data.resturentName)

          const hashedPassword = await this.hashPassword(data.password);


          const user = await this.userRepo.createTemp({
               ...data,
               password:hashedPassword,
               slug:slug,
               role:'vendor'
          });

        

          const generateOtp = generate4digitOtp();

           const email = data.email;

           const createOtp = new OTP({
               email:email,
               otp:generateOtp
           });

          const saveOtp = createOtp.save();

          await sendMailer(generateOtp.toString(),email);

          return {user}
     }

}