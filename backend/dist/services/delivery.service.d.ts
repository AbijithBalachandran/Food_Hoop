import { IsTemp } from '../models/temp.model';
export declare class DeliveryService {
    private userRepo;
    private authService;
    private hashPassword;
    registerDelivery(data: {
        name: string;
        email: string;
        city: string;
        mobile: string;
        password: string;
    }): Promise<{
        user: IsTemp;
    }>;
}
//# sourceMappingURL=delivery.service.d.ts.map