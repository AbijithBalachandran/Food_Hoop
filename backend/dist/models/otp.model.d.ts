import mongoose from "mongoose";
export interface IsOtp {
    email: string;
    otp: number;
    createdAt: Date;
}
export declare const OTP: mongoose.Model<IsOtp, {}, {}, {}, mongoose.Document<unknown, {}, IsOtp, {}, {}> & IsOtp & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>;
//# sourceMappingURL=otp.model.d.ts.map