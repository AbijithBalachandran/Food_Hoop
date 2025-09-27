"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMailer = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sendMailer = async (otp, email) => {
    try {
        const transport = nodemailer_1.default.createTransport({
            host: process.env.SMHOST,
            port: Number(process.env.SMPORT),
            secure: true,
            auth: {
                user: process.env.SEND_MAIL,
                pass: process.env.MAIL_PASSWORD
            }
        });
        const mailOptions = {
            from: process.env.SEND_MAIL,
            to: email,
            subject: `Opt for FoodHop-'Hopping flavors to your door'`,
            html: `<h2>Hi, This is your OTP from FoodHop</h2>
       <h3>Hopping flavors to your door</h3>
       <h1>${otp}</h1>`
        };
        const info = await transport.sendMail(mailOptions);
        console.log('Preview URL :', nodemailer_1.default.getTestMessageUrl(info));
    }
    catch (error) {
        if (error instanceof Error) {
            console.error('Error from sending Mail:', error.message);
        }
        else {
            console.error('Unknown error from sending Mail:', error);
        }
        throw new Error('Failed to send Mail');
    }
};
exports.sendMailer = sendMailer;
//# sourceMappingURL=sendMailer.js.map