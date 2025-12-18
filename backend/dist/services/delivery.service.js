"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const auth_service_1 = require("./auth.service");
const user_repository_1 = require("../ repositories/user.repository");
const generateOTP_1 = require("../utils/generateOTP");
const otp_model_1 = require("../models/otp.model");
const generateSlug_1 = require("../utils/generateSlug");
const sendMailer_1 = require("../utils/sendMailer");
const temp_repository_1 = require("../ repositories/temp.repository");
const otp_repository_1 = require("../ repositories/otp.repository");
class DeliveryService {
    constructor() {
        this._userRepo = new user_repository_1.UserRepository();
        this._authService = new auth_service_1.AuthService();
        this._tempRepo = new temp_repository_1.TempRepository();
        this._otpRepo = new otp_repository_1.OtpRepository();
    }
    // hasing password =============================================================
    async hashPassword(password) {
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
            role: user.role,
            city: user.city
        };
    }
    // Register new user and genarating otp , sending mail with the otp ========================================
    async registerDelivery(data) {
        const existingUser = await this._tempRepo.findOne({ email: data.email });
        if (existingUser) {
            throw new Error('User Already Exist');
        }
        const slug = await (0, generateSlug_1.generateSlug)(data.name);
        const hashedPassword = await this.hashPassword(data.password);
        const user = await this._tempRepo.create({
            ...data,
            password: hashedPassword,
            slug: slug,
            role: 'delivery'
        });
        const generateOtp = (0, generateOTP_1.generate4digitOtp)();
        const email = data.email;
        const createOtp = new otp_model_1.OTP({
            email: email,
            otp: generateOtp
        });
        const saveOtp = createOtp.save();
        await (0, sendMailer_1.sendMailer)(generateOtp.toString(), email);
        return {
            message: "Delivery gay registered successfully .OTP send to email",
            user: this.mapToUserResponse(user)
        };
    }
}
exports.DeliveryService = DeliveryService;
//# sourceMappingURL=delivery.service.js.map