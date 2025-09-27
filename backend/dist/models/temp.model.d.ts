import mongoose, { Document } from "mongoose";
export interface IsTemp extends Document {
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
export declare const TempModel: mongoose.Model<IsTemp, {}, {}, {}, mongoose.Document<unknown, {}, IsTemp, {}, {}> & IsTemp & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=temp.model.d.ts.map