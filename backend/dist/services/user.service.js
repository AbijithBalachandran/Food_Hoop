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
class UserService {
    constructor() {
        this.userRepo = new user_repository_1.UserRepository();
        this.authService = new auth_service_1.AuthService();
    }
    // hasing password =============================================================
    async hashPassword(password) {
        return bcrypt_1.default.hash(password, 10);
    }
    // Register new user and genarating otp , sending mail with the otp ========================================
    async registerUser(data) {
        const existingUser = await this.userRepo.findExistingEmail(data.email);
        if (existingUser) {
            throw new Error('User Already Exist');
        }
        const slug = await (0, generateSlug_1.generateSlug)(data.name);
        const hashedPassword = await this.hashPassword(data.password);
        const user = await this.userRepo.createTemp({
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
        return { user };
    }
    //  insertin The otp ==============================================
    async verifyOtp(email, otp) {
        const foundOtp = await this.userRepo.findOtp(email);
        if (!foundOtp) {
            return false;
        }
        if (foundOtp.otp.toString() !== otp.toString()) {
            throw new Error("Invalid Otp or otp is Expired");
        }
        const tempUser = await this.userRepo.findEmail(email);
        if (!tempUser) {
            throw new Error("user not found");
        }
        const tempUserObj = tempUser.toObject();
        await this.userRepo.createOrg({ ...tempUserObj });
        await this.userRepo.deleteOtp(email);
        await this.userRepo.deleteTempUser(email);
        return true;
    }
    // ====  Resend OTP =======================================
    async ResendOTP(email) {
        try {
            const tempUser = await this.userRepo.findEmail(email);
            if (!tempUser) {
                throw new Error("User not found or User Already Verified");
            }
            ;
            const otp = (0, generateOTP_1.generate4digitOtp)();
            const existingOTP = await this.userRepo.findOtp(email);
            if (existingOTP) {
                await otp_model_1.OTP.updateOne({ email }, { otp, createdAt: new Date() });
            }
            else {
                const createOtp = new otp_model_1.OTP({ email, otp });
                await createOtp.save();
            }
            await (0, sendMailer_1.sendMailer)(otp.toString(), email);
            return true;
        }
        catch (error) {
            console.error(error);
            return false;
        }
    }
    // User Login ==============================================
    async loginUser(data) {
        const user = await this.userRepo.loginFindEmail(data.email);
        if (!user) {
            throw new Error('User not found .Please register ...........!');
        }
        const passwordCheck = await bcrypt_1.default.compare(data.password, user.password);
        if (!passwordCheck) {
            throw new Error("Invalid password...!");
        }
        const accessToken = this.authService.generateAccessToken({ id: user.id });
        const refreshToken = this.authService.generateRefreshToken({ id: user.id });
        const { password, ...userData } = user.toObject();
        return { user: userData, accessToken, refreshToken };
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map