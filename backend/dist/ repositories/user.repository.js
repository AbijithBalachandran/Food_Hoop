"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const otp_model_1 = require("../models/otp.model");
const temp_model_1 = require("../models/temp.model");
const userModel_1 = require("../models/userModel");
class UserRepository {
    // finding the existing user ---------------
    async findExistingEmail(email) {
        return userModel_1.UserModel.findOne({ email });
    }
    // finding main in the temp user ----------------
    async findEmail(email) {
        return temp_model_1.TempModel.findOne({ email });
    }
    // creating temp user -----------------
    async createTemp(userData) {
        const user = new temp_model_1.TempModel(userData);
        return await user.save();
    }
    // otp managemnet -----------------------------
    async findOtp(email) {
        return otp_model_1.OTP.findOne({ email }).sort({ createdAt: -1 });
    }
    async deleteOtp(email) {
        await otp_model_1.OTP.deleteMany({ email });
    }
    async deleteTempUser(email) {
        await temp_model_1.TempModel.deleteOne({ email });
    }
    // creating original user in the actual user model after the successfull otp verification -------------------
    async createOrg(userData) {
        const user = new userModel_1.UserModel(userData);
        return user.save();
    }
    // user login stages ---------------------------------------
    async loginFindEmail(email) {
        return userModel_1.UserModel.findOne({ email });
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map