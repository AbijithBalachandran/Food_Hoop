
import mongoose ,{Document, Schema} from "mongoose";

export interface IsOtp{
    email:string,
    otp:number,
    createdAt:Date
};

const otpSchema:Schema<IsOtp> = new mongoose.Schema(
    {

        email:{
            type:String,
            required:true
        },
        otp:{
            type:Number,
            required:true
        },
        createdAt:{
            type:Date,
            default:Date.now,
            expires:60
        }
    },{timestamps:true}
);

export const OTP = mongoose.model<IsOtp>("OTP",otpSchema);