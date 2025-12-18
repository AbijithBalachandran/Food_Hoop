import { IAdminService } from './interface/admin.service.interface';
import { RegisterUserRequestDto } from '../dto/request/user.request.dto';
import { RegisterUserResponseDto } from '../dto/response/user.response.dto';
export declare class AdminService implements IAdminService {
    private _userRepo;
    private _authService;
    private _tempRepo;
    private _otpRepo;
    private hashPassword;
    private mapToUserResponse;
    registerAdmin(data: RegisterUserRequestDto): Promise<RegisterUserResponseDto>;
}
//# sourceMappingURL=admin.service.d.ts.map