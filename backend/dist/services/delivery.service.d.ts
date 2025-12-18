import { IDeliveryService } from './interface/delivery.service.interface';
import { RegisterUserRequestDto } from '../dto/request/user.request.dto';
import { RegisterUserResponseDto } from '../dto/response/user.response.dto';
export declare class DeliveryService implements IDeliveryService {
    private _userRepo;
    private _authService;
    private _tempRepo;
    private _otpRepo;
    private hashPassword;
    private mapToUserResponse;
    registerDelivery(data: RegisterUserRequestDto): Promise<RegisterUserResponseDto>;
}
//# sourceMappingURL=delivery.service.d.ts.map