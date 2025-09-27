import { IsTemp } from '../models/temp.model';
export declare class AdminService {
    private userRepo;
    private authService;
    private hashPassword;
    registerAdmin(data: {
        name: string;
        email: string;
        mobile: string;
        password: string;
    }): Promise<{
        user: IsTemp;
    }>;
}
//# sourceMappingURL=admin.service.d.ts.map