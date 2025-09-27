"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const auth_service_1 = require("./auth.service");
const user_repository_1 = require("../ repositories/user.repository");
const generateOTP_1 = require("../utils/generateOTP");
const otp_model_1 = require("../models/otp.model");
const generateSlug_1 = require("../utils/generateSlug");
const sendMailer_1 = require("../utils/sendMailer");
class vendorService {
    constructor() {
        this.userRepo = new user_repository_1.UserRepository();
        this.authService = new auth_service_1.AuthService();
    }
    // hasing password =============================================================
    async hashPassword(password) {
        return bcrypt_1.default.hash(password, 10);
    }
    // Register new user and genarating otp , sending mail with the otp ========================================
    async registerVendor(data) {
        const existingUser = await this.userRepo.findExistingEmail(data.email);
        if (existingUser) {
            throw new Error('User Already Exist');
        }
        const slug = await (0, generateSlug_1.generateSlug)(data.resturentName);
        const hashedPassword = await this.hashPassword(data.password);
        const user = await this.userRepo.createTemp({
            ...data,
            password: hashedPassword,
            slug: slug,
            role: 'vendor'
        });
        const generateOtp = (0, generateOTP_1.generate4digitOtp)();
        const email = data.email;
        const createOtp = new otp_model_1.OTP({
            email: email,
            otp: generateOtp
        });
        const saveOtp = createOtp.save();
        await (0, sendMailer_1.sendMailer)(generateOtp.toString(), email);
        return { user };
    }
}
exports.vendorService = vendorService;
//# sourceMappingURL=vendor.service.js.map