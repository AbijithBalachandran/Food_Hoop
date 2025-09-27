"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    resturentName: {
        type: String,
        required: function () {
            return this.role === 'vendor';
        }
    },
    licenceNumber: {
        type: String,
        required: function () {
            return this.role === 'vendor';
        }
    },
    city: {
        type: String,
        required: function () {
            return this.role === 'delivery';
        }
    },
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["admin", "vendor", "user", "delivery"],
        required: true,
        default: "user"
    }
}, { timestamps: true });
exports.UserModel = mongoose_1.default.model("User", UserSchema);
//# sourceMappingURL=userModel.js.map