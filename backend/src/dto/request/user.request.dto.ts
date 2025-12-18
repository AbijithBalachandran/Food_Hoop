// src/dto/user/request/user.request.dto.ts

export interface RegisterUserRequestDto {
  name: string;
  email: string;
  mobile: string;
  resturentName?:string,
  licenceNumber?:string,
  city?:string;
  password: string;

}

export interface VerifyOtpRequestDto {
  email: string;
  otp: string | number;
}

export interface LoginUserRequestDto {
  email: string;
  password: string;
}
