import { IsTemp } from '../models/temp.model';
export declare class vendorService {
    private userRepo;
    private authService;
    private hashPassword;
    registerVendor(data: {
        resturentName: string;
        licenceNumber: string;
        name: string;
        email: string;
        mobile: string;
        password: string;
    }): Promise<{
        user: IsTemp;
    }>;
}
//# sourceMappingURL=vendor.service.d.ts.map