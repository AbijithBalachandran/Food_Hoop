import { IBaseRepository } from "./interfaces/base.repo.interface";
import { IsOtp,OTP } from "../models/otp.model";
import { IsOtpRepo } from "./interfaces/otp.repo.interface";
import { BaseRepository } from "./base.repository";

export class OtpRepository extends BaseRepository<IsOtp> implements IsOtpRepo{
    constructor(){
        super(OTP)
    }
};

