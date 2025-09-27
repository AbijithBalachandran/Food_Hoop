import { IsUser } from '../models/userModel';
import { IsTemp } from '../models/temp.model';
export declare class UserService {
    private userRepo;
    private authService;
    private hashPassword;
    registerUser(data: {
        name: string;
        email: string;
        mobile: string;
        password: string;
    }): Promise<{
        user: IsTemp;
    }>;
    verifyOtp(email: string, otp: number | string): Promise<boolean>;
    ResendOTP(email: string): Promise<boolean>;
    loginUser(data: {
        email: string;
        password: string;
    }): Promise<{
        user: IsUser;
        accessToken: string;
        refreshToken: string;
    }>;
}
//# sourceMappingURL=user.service.d.ts.map