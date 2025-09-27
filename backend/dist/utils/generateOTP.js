"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate4digitOtp = void 0;
const generate4digitOtp = () => {
    const randonNumber = Math.floor(1000 + Math.random() * 9000);
    const generateOtp = randonNumber.toString();
    return generateOtp;
};
exports.generate4digitOtp = generate4digitOtp;
//# sourceMappingURL=generateOTP.js.map