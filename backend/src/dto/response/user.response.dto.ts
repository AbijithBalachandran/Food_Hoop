export interface UserResponseDto {
  id: string;
  name: string;
  email: string;
  mobile: string;
  city?:string;
  resturentName?:string,
  licenceNumber?:string,
  slug?: string;
  role?: string;
}

export interface RegisterUserResponseDto {
  message: string;
  user: UserResponseDto;
}

export interface LoginUserResponseDto {
  message: string;
  user: UserResponseDto;
  accessToken: string;
  refreshToken: string;
}

export interface VerifyOtpResponseDto {
  message: string;
  success: boolean;
}

export interface ResendOtpResponseDto {
  message: string;
  success: boolean;
}