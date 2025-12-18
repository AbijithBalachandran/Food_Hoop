import bcrypt from 'bcrypt';
import { AuthService } from './auth.service';
import { UserModel ,IsUser} from '../models/user.model';
import { UserRepository } from '../ repositories/user.repository';
import { generate4digitOtp } from '../utils/generateOTP';
import { OTP , IsOtp } from '../models/otp.model';
import { generateSlug } from '../utils/generateSlug';
import { sendMailer } from '../utils/sendMailer';
import { IsTemp } from '../models/temp.model';
import { TempRepository } from '../ repositories/temp.repository';
import { OtpRepository } from '../ repositories/otp.repository';
import { IUserService } from './interface/user.service.interface';

import {
   RegisterUserRequestDto ,
   LoginUserRequestDto,
   VerifyOtpRequestDto
  } from '../dto/request/user.request.dto';

import { 
  RegisterUserResponseDto,
  UserResponseDto,
  LoginUserResponseDto,
  ResendOtpResponseDto,
  VerifyOtpResponseDto
} from '../dto/response/user.response.dto';

export class UserService implements IUserService {


  //  Repositories ++==============================================================

     private _userRepo = new UserRepository();
     private _authService = new AuthService();
     private _tempRepo = new TempRepository();
     private _otpRepo = new OtpRepository();


  // hasing password =============================================================

     private async _hashPassword(password:string):Promise<string>{
          return bcrypt.hash(password,10)
     }

    //  Map to User  Response =======================================================

    private mapToUserResponse(user:any):UserResponseDto{
      return {
          id:user._id,
          name:user.name,
          email:user.email,
          mobile:user.mobile,
          slug:user.slug,
          role:user.role
      }
    }

     // Register new user and genarating otp , sending mail with the otp ========================================

     async registerUser(data:RegisterUserRequestDto):Promise<RegisterUserResponseDto>{
          
          const existingUser = await this._userRepo.findOne({email:data.email});
          
          if (existingUser) {
               throw new Error('User Already Exist');
          }
          const slug = await generateSlug(data.name)

          const hashedPassword = await this._hashPassword(data.password);


          const tempUser = await this._tempRepo.create({
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

          return {
             message: 'User registered successfully. OTP sent to email.',
             user: this.mapToUserResponse(tempUser),
          }
     }

 
 //  insertin The otp ==============================================


     async verifyOtp(data: VerifyOtpRequestDto):Promise<VerifyOtpResponseDto>{

         const {email,otp} = data;

         const foundOtp = await this._otpRepo.findOne({email});


           if (!foundOtp || foundOtp.otp.toString() !== otp.toString()) {
               throw new Error("Invalid Otp or otp is Expired");
           }

           const tempUser = await this._tempRepo.findOne({email});


           if (!tempUser) {
                 throw new Error("user not found");
             }

            const tempUserObj = tempUser.toObject();

           await this._userRepo.create({...tempUserObj});

           await this._otpRepo.delete(email);
           await this._tempRepo.delete(email);

           return {
                message: 'OTP verified successfully', success: true
           }
     }


   // ====  Resend OTP =======================================
   
   async ResendOTP(email:string):Promise<ResendOtpResponseDto>{
       try {
      
         const tempUser = await this._tempRepo.findOne({email});
         if (!tempUser) {
            throw new Error("User not found or User Already Verified");
         };

         const otp = generate4digitOtp();

         const existingOTP = await this._otpRepo.findOne({email});
         if (existingOTP) {
            await OTP.updateOne({email},{otp,createdAt:new Date()});
         }else{
            const createOtp = new OTP({email,otp});
            await createOtp.save();
         }

         await sendMailer(otp.toString(),email);
         return{
           message: 'OTP resent successfully', success: true 
         }

       } catch (error) {
        console.error(error);
        return {
          message:'something went to wrong',
          success:false
        };
       }
   }


  // User Login ================================================


  async loginUser(data:LoginUserRequestDto):Promise<LoginUserResponseDto>{

      const user = await this._userRepo.findOne({email:data.email});

      if (!user) {
          throw new Error('User not found .Please register ...........!');
      }

         const passwordCheck = await bcrypt.compare(data.password, user.password);

         if (!passwordCheck) {
           throw new Error("Invalid password...!");
         }

           const accessToken = this._authService.generateAccessToken({id:user.id});
           const refreshToken = this._authService.generateRefreshToken({id:user.id});
          const { password, ...userData } = user.toObject(); 
          return {
             message: 'Login successful',
             user: this.mapToUserResponse(user),
             accessToken,
             refreshToken,
             };
          

  }

       

}



