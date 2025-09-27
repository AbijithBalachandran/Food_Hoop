import mongoose, { Document } from "mongoose";
export interface IsUser extends Document {
    resturentName: string;
    licenceNumber: string;
    city: string;
    name: string;
    slug: string;
    email: string;
    mobile: string;
    password: string;
    role: 'admin' | 'vendor' | 'user' | 'delivery';
    createdAt?: Date;
    updatedAt?: Date;
}
export declare const UserModel: mongoose.Model<IsUser, {}, {}, {}, mongoose.Document<unknown, {}, IsUser, {}, {}> & IsUser & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=userModel.d.ts.map