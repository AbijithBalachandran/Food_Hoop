"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
class userController {
    constructor(_userService) {
        this._userService = _userService;
        // user Registration 
        this.registerUser = async (req, res) => {
            try {
                const { name, email, mobile, password } = req.body;
                if (!name || !email || !password || !mobile) {
                    res.status(400).json({ message: "Missing fields" });
                    return;
                }
                const { user } = await this._userService.registerUser({ name, email, mobile, password });
                res.cookie("otpEmail", email, { httpOnly: true, sameSite: "lax", secure: false });
                res.status(201).json({ message: "user register successfully..!!", user });
                return;
            }
            catch (error) {
                console.error("Error in register User", error);
                res.status(400).json({ message: error.message });
            }
        };
        // otp verification -=-===========================
        this.otpVerification = async (req, res) => {
            try {
                const { otp } = req.body;
                const email = req.cookies.otpEmail;
                if (!email) {
                    res.status(400).json({ message: 'Email not found in cookies.....' });
                    return;
                }
                console.log("Email from ", email);
                const storedOtp = await this._userService.verifyOtp({ email, otp });
                if (!storedOtp) {
                    res.status(400).json({ message: "Invalid or Expired Otp" });
                    return;
                }
                res.clearCookie("otpEmail");
                res.status(200).json({ message: "otp is verified......!" });
                return;
            }
            catch (error) {
                console.error("Error in Otp verification :", error);
                res.status(500).json({ error: error.message });
            }
        };
        //  Resend OTP ==================================
        this.resendOTP = async (req, res) => {
            try {
                const email = req.cookies.otpEmail;
                if (!email) {
                    res.status(400).json({ message: 'Email not found in cookies.....' });
                    return;
                }
                const otpResend = await this._userService.ResendOTP(email);
                if (!otpResend) {
                    res.status(400).json({ massage: "Failed to resend OTP" });
                    return;
                }
                res.status(200).json({ message: "OTP Resend Successfully..." });
                return;
            }
            catch (error) {
                console.error("Error in Otp verification :", error);
                res.status(500).json({ error: error.message });
            }
        };
        //  user login stage ============================================
        this.loginVerification = async (req, res) => {
            try {
                const { email, password } = req.body;
                const { user, accessToken, refreshToken } = await this._userService.loginUser({ email, password });
                res.cookie("accessToken", accessToken, { httpOnly: true, sameSite: "lax", secure: false });
                res.cookie("refreshToken", refreshToken, { httpOnly: true, sameSite: "lax", secure: false });
                res.status(200).json({ message: "Login successful", user });
            }
            catch (error) {
                console.error("Error in Login the user :", error);
                res.status(500).json({ message: error });
            }
        };
    }
}
exports.userController = userController;
//# sourceMappingURL=user.controller.js.map