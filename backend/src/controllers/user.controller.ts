
import { Request,Response } from "express";
import { UserService } from "../services/user.service";
import { IUserService } from "../services/interface/user.service.interface";
import { IUserController } from "./interface/user.controller.interface";

export class userController implements IUserController {

    constructor(private _userService:IUserService){}

    // user Registration 

    registerUser = async(req:Request,res:Response):Promise<void>=>{
        try {
            
            const {name,email,mobile,password} = req.body;

            if (!name || !email || !password || !mobile) {
              res.status(400).json({ message: "Missing fields" });
              return;
            }
            const {user} = 
            await this._userService.registerUser({name,email,mobile,password});
          
            res.cookie("otpEmail",email,{httpOnly:true,sameSite:"lax",secure:false});

            res.status(201).json({message:"user register successfully..!!",user});
            return;
        } catch (error) {
            console.error("Error in register User",error);
            res.status(400).json({message:(error as Error).message});
        }
    }


    // otp verification -=-===========================

    otpVerification = async(req:Request, res:Response):Promise<void>=>{
        try {
            const {otp} = req.body;
            const email = req.cookies.otpEmail;
            
            if (!email) {
              res.status(400).json({message:'Email not found in cookies.....'});
              return
            }

            console.log("Email from ",email)

            const storedOtp = await this._userService.verifyOtp({email,otp});

            if(!storedOtp){
               res.status(400).json({message:"Invalid or Expired Otp"});
               return;
            }

            res.clearCookie("otpEmail");

            res.status(200).json({message:"otp is verified......!"});
            return;
        } catch (error) {
            console.error("Error in Otp verification :",error);
            res.status(500).json({error:(error as Error).message});
        }
    }

    //  Resend OTP ==================================

    resendOTP = async(req:Request,res:Response):Promise<void>=>{
        try {
            const email = req.cookies.otpEmail;
            if (!email) {
              res.status(400).json({message:'Email not found in cookies.....'});
              return
            }

           const otpResend = await this._userService.ResendOTP(email);

           if (!otpResend) {
            res.status(400).json({massage:"Failed to resend OTP"});
           return; 
         }

         res.status(200).json({message:"OTP Resend Successfully..."})
         return;
        } catch (error) {
            console.error("Error in Otp verification :",error);
            res.status(500).json({error:(error as Error).message});
        }
    }

    //  user login stage ============================================

    loginVerification = async(req:Request, res:Response):Promise<void>=>{
        try {
            const {email , password} = req.body;

            const {user , accessToken , refreshToken} = await this._userService.loginUser({email,password});

            res.cookie("accessToken", accessToken, { httpOnly: true, sameSite: "lax", secure: false});
            res.cookie("refreshToken", refreshToken, { httpOnly: true, sameSite: "lax", secure: false });

            res.status(200).json({ message: "Login successful", user});

        } catch (error) {
            console.error("Error in Login the user :",error)
            res.status(500).json({message:error});
        }
    }

    


}
