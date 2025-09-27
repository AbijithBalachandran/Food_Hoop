import { IsOtp } from "../models/otp.model";
import { IsTemp } from "../models/temp.model";
import { IsUser } from "../models/userModel";
export declare class UserRepository {
    findExistingEmail(email: string): Promise<IsUser | null>;
    findEmail(email: string): Promise<IsTemp | null>;
    createTemp(userData: Partial<IsTemp>): Promise<IsUser>;
    findOtp(email: string): Promise<IsOtp | null>;
    deleteOtp(email: string): Promise<void>;
    deleteTempUser(email: string): Promise<void>;
    createOrg(userData: Partial<IsTemp>): Promise<IsUser>;
    loginFindEmail(email: string): Promise<IsUser | null>;
}
//# sourceMappingURL=user.repository.d.ts.map