"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshSecret = exports.accessSecret = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
if (!process.env.JWT_SECRET_ACCESS_TOKEN || !process.env.JWT_SECRET_REFRESH_TOKEN) {
    throw new Error('JWT secrets keys are not set in envirolement variables');
}
exports.accessSecret = process.env.JWT_SECRET_ACCESS_TOKEN;
exports.refreshSecret = process.env.JWT_SECRET_REFRESH_TOKEN;
//# sourceMappingURL=config.js.map