"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config/config");
class AuthService {
    constructor() {
        this._accessToken = config_1.accessSecret || 'accessSecret';
        this._refreshToken = config_1.refreshSecret || 'refreshSecret';
    }
    generateAccessToken(payload) {
        return jsonwebtoken_1.default.sign(payload, this._accessToken, { expiresIn: '15m' });
    }
    generateRefreshToken(payload) {
        return jsonwebtoken_1.default.sign(payload, this._refreshToken, { expiresIn: '7d' });
    }
    verifyAccessToken(token) {
        return jsonwebtoken_1.default.verify(token, this._accessToken);
    }
    verifyRefreshToken(token) {
        return jsonwebtoken_1.default.verify(token, this._refreshToken);
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map