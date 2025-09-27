"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
const authRouter = express_1.default.Router();
authRouter.get('/verify', auth_middleware_1.authenticate, (req, res) => {
    res.json({ success: true, user: req.user });
});
authRouter.get('/refresh', (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
        return res.status(401).json({ success: false, message: "No refresh token" });
    }
    try {
        const decode = jsonwebtoken_1.default.verify(refreshToken, process.env.JWT_SECRET_REFRESH_TOKEN);
        const newAccessToken = jsonwebtoken_1.default.sign({ id: decode.id }, process.env.JWT_SECRET_ACCESS_TOKEN, { expiresIn: "15m" });
        res.cookie("accessToken", newAccessToken, {
            httpOnly: true,
            sameSite: "lax",
            secure: false
        });
        return res.json({ success: true, accessToken: newAccessToken });
    }
    catch (error) {
        console.error(error);
        return res.status(401).json({ success: false, message: "Invalid refresh token" });
    }
});
exports.default = authRouter;
//# sourceMappingURL=auth.router.js.map