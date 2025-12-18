import { IUserService } from './interface/user.service.interface';
import { RegisterUserRequestDto, LoginUserRequestDto, VerifyOtpRequestDto } from '../dto/request/user.request.dto';
import { RegisterUserResponseDto, LoginUserResponseDto, ResendOtpResponseDto, VerifyOtpResponseDto } from '../dto/response/user.response.dto';
export declare class UserService implements IUserService {
    private _userRepo;
    private _authService;
    private _tempRepo;
    private _otpRepo;
    private _hashPassword;
    private mapToUserResponse;
    registerUser(data: RegisterUserRequestDto): Promise<RegisterUserResponseDto>;
    verifyOtp(data: VerifyOtpRequestDto): Promise<VerifyOtpResponseDto>;
    ResendOTP(email: string): Promise<ResendOtpResponseDto>;
    loginUser(data: LoginUserRequestDto): Promise<LoginUserResponseDto>;
}
//# sourceMappingURL=user.service.d.ts.map