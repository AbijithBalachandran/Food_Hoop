
import { Request,Response } from "express";
import { AdminService } from "../services/admin.service";


export class AdminController {

    private AdminService = new AdminService();

    // vendor Registration 

    registerAdmin = async(req:Request,res:Response):Promise<void>=>{
        try {
            
            const {name,email,mobile,password} = req.body;
            const {user} = 
            await this.AdminService.registerAdmin({ name,email,mobile,password});
          
            res.cookie("otpEmail",email,{httpOnly:true,sameSite:"strict",secure:true});

            res.status(201).json({message:"user register successfully..!!",user});

        } catch (error) {
            res.status(400).json({message:(error as Error).message});
        }
    }


}