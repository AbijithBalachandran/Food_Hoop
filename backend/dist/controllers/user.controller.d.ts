import { Request, Response } from "express";
export declare class userController {
    private UserService;
    registerUser: (req: Request, res: Response) => Promise<void>;
    otpVerification: (req: Request, res: Response) => Promise<void>;
    resendOTP: (req: Request, res: Response) => Promise<void>;
    loginVerification: (req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=user.controller.d.ts.map