import { Request, Response } from "express";
import { IUserService } from "../services/interface/user.service.interface";
import { IUserController } from "./interface/user.controller.interface";
export declare class userController implements IUserController {
    private _userService;
    constructor(_userService: IUserService);
    registerUser: (req: Request, res: Response) => Promise<void>;
    otpVerification: (req: Request, res: Response) => Promise<void>;
    resendOTP: (req: Request, res: Response) => Promise<void>;
    loginVerification: (req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=user.controller.d.ts.map