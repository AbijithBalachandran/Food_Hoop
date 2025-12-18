import {
     RegisterUserRequestDto ,
     LoginUserRequestDto,
     VerifyOtpRequestDto 
    } from "../../dto/request/user.request.dto";

import { 
    RegisterUserResponseDto,
    LoginUserResponseDto,
    ResendOtpResponseDto,
    VerifyOtpResponseDto 
} from "../../dto/response/user.response.dto";


export interface IUserService{
    registerUser(data:RegisterUserRequestDto):Promise<RegisterUserResponseDto>;
    verifyOtp(data:VerifyOtpRequestDto):Promise<VerifyOtpResponseDto>;
    ResendOTP(email:string):Promise<ResendOtpResponseDto>;
    loginUser(data:LoginUserRequestDto):Promise<LoginUserResponseDto>;
}