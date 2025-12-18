import { IVendorService } from './interface/vendor.service.interface';
import { RegisterUserRequestDto } from '../dto/request/user.request.dto';
import { RegisterUserResponseDto } from '../dto/response/user.response.dto';
export declare class VendorService implements IVendorService {
    private _userRepo;
    private _authService;
    private _tempRepo;
    private _otpRepo;
    private hashPassword;
    private mapToUserResponse;
    registerVendor(data: RegisterUserRequestDto): Promise<RegisterUserResponseDto>;
}
//# sourceMappingURL=vendor.service.d.ts.map