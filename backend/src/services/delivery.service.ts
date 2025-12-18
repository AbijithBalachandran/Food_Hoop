import bcrypt from 'bcrypt';
import { AuthService } from './auth.service';
import { UserRepository } from '../ repositories/user.repository';
import { generate4digitOtp } from '../utils/generateOTP';
import { OTP , IsOtp } from '../models/otp.model';
import { generateSlug } from '../utils/generateSlug';
import { sendMailer } from '../utils/sendMailer';
import { IsTemp } from '../models/temp.model';
import { TempRepository } from '../ repositories/temp.repository';
import { OtpRepository } from '../ repositories/otp.repository';
import { IDeliveryService } from './interface/delivery.service.interface';
import { RegisterUserRequestDto } from '../dto/request/user.request.dto';
import { RegisterUserResponseDto, UserResponseDto } from '../dto/response/user.response.dto';


export class DeliveryService implements IDeliveryService{

          private _userRepo = new UserRepository();
          private _authService = new AuthService();
          private _tempRepo = new TempRepository();
          private _otpRepo = new OtpRepository();
     


     // hasing password =============================================================

     private async hashPassword(password:string):Promise<string>{
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
               role:user.role,
               city:user.city
           }
         }

     // Register new user and genarating otp , sending mail with the otp ========================================

     async registerDelivery(data:RegisterUserRequestDto):Promise<RegisterUserResponseDto>{
          
          const existingUser = await this._tempRepo.findOne({email:data.email});
          
          if (existingUser) {
               throw new Error('User Already Exist');
          }
          const slug = await generateSlug(data.name)

          const hashedPassword = await this.hashPassword(data.password);


          const user = await this._tempRepo.create({
               ...data,
               password:hashedPassword,
               slug:slug,
               role:'delivery'
          });

        

          const generateOtp = generate4digitOtp();

           const email = data.email;

           const createOtp = new OTP({
               email:email,
               otp:generateOtp
           });

          const saveOtp = createOtp.save();

          await sendMailer(generateOtp.toString(),email);

          return {
               message:"Delivery gay registered successfully .OTP send to email",
               user:this.mapToUserResponse(user)
          }
     }






}