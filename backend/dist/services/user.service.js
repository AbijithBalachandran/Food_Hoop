"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const auth_service_1 = require("./auth.service");
const user_repository_1 = require("../ repositories/user.repository");
const generateOTP_1 = require("../utils/generateOTP");
const otp_model_1 = require("../models/otp.model");
const generateSlug_1 = require("../utils/generateSlug");
const sendMailer_1 = require("../utils/sendMailer");
const temp_repository_1 = require("../ repositories/temp.repository");
const otp_repository_1 = require("../ repositories/otp.repository");
class UserService {
    constructor() {
        //  Repositories ++==============================================================
        this._userRepo = new user_repository_1.UserRepository();
        this._authService = new auth_service_1.AuthService();
        this._tempRepo = new temp_repository_1.TempRepository();
        this._otpRepo = new otp_repository_1.OtpRepository();
    }
    // hasing password =============================================================
    async _hashPassword(password) {
        return bcrypt_1.default.hash(password, 10);
    }
    //  Map to User  Response =======================================================
    mapToUserResponse(user) {
        return {
            id: user._id,
            name: user.name,
            email: user.email,
            mobile: user.mobile,
            slug: user.slug,
            role: user.role
        };
    }
    // Register new user and genarating otp , sending mail with the otp ========================================
    async registerUser(data) {
        const existingUser = await this._userRepo.findOne({ email: data.email });
        if (existingUser) {
            throw new Error('User Already Exist');
        }
        const slug = await (0, generateSlug_1.generateSlug)(data.name);
        const hashedPassword = await this._hashPassword(data.password);
        const tempUser = await this._tempRepo.create({
            ...data,
            password: hashedPassword,
            slug: slug,
            role: 'user'
        });
        const generateOtp = (0, generateOTP_1.generate4digitOtp)();
        const email = data.email;
        const createOtp = new otp_model_1.OTP({
            email: email,
            otp: generateOtp
        });
        const saveOtp = await createOtp.save();
        await (0, sendMailer_1.sendMailer)(generateOtp.toString(), email);
        return {
            message: 'User registered successfully. OTP sent to email.',
            user: this.mapToUserResponse(tempUser),
        };
    }
    //  insertin The otp ==============================================
    async verifyOtp(data) {
        const { email, otp } = data;
        const foundOtp = await this._otpRepo.findOne({ email });
        if (!foundOtp || foundOtp.otp.toString() !== otp.toString()) {
            throw new Error("Invalid Otp or otp is Expired");
        }
        const tempUser = await this._tempRepo.findOne({ email });
        if (!tempUser) {
            throw new Error("user not found");
        }
        const tempUserObj = tempUser.toObject();
        await this._userRepo.create({ ...tempUserObj });
        await this._otpRepo.delete(email);
        await this._tempRepo.delete(email);
        return {
            message: 'OTP verified successfully', success: true
        };
    }
    // ====  Resend OTP =======================================
    async ResendOTP(email) {
        try {
            const tempUser = await this._tempRepo.findOne({ email });
            if (!tempUser) {
                throw new Error("User not found or User Already Verified");
            }
            ;
            const otp = (0, generateOTP_1.generate4digitOtp)();
            const existingOTP = await this._otpRepo.findOne({ email });
            if (existingOTP) {
                await otp_model_1.OTP.updateOne({ email }, { otp, createdAt: new Date() });
            }
            else {
                const createOtp = new otp_model_1.OTP({ email, otp });
                await createOtp.save();
            }
            await (0, sendMailer_1.sendMailer)(otp.toString(), email);
            return {
                message: 'OTP resent successfully', success: true
            };
        }
        catch (error) {
            console.error(error);
            return {
                message: 'something went to wrong',
                success: false
            };
        }
    }
    // User Login ================================================
    async loginUser(data) {
        const user = await this._userRepo.findOne({ email: data.email });
        if (!user) {
            throw new Error('User not found .Please register ...........!');
        }
        const passwordCheck = await bcrypt_1.default.compare(data.password, user.password);
        if (!passwordCheck) {
            throw new Error("Invalid password...!");
        }
        const accessToken = this._authService.generateAccessToken({ id: user.id });
        const refreshToken = this._authService.generateRefreshToken({ id: user.id });
        const { password, ...userData } = user.toObject();
        return {
            message: 'Login successful',
            user: this.mapToUserResponse(user),
            accessToken,
            refreshToken,
        };
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map