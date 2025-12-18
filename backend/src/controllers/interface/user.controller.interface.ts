import { Request, Response } from "express";

export interface IUserController {
  registerUser(req: Request, res: Response): Promise<void>;
  otpVerification(req: Request, res: Response): Promise<void>;
  resendOTP(req: Request, res: Response): Promise<void>;
  loginVerification(req: Request, res: Response): Promise<void>;
}
