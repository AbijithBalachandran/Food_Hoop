
import { Request,Response } from "express";
import { vendorService } from "../services/vendor.service";


export class vendorController {

    private VendorService = new vendorService();

    // vendor Registration 

    registerVendor = async(req:Request,res:Response):Promise<void>=>{
        try {
            
            const {resturentName,licenceNumber,name,email,mobile,password} = req.body;
            const {user} = 
            await this.VendorService.registerVendor({ resturentName,licenceNumber,name,email,mobile,password});
          
            res.cookie("otpEmail",email,{httpOnly:true,sameSite:"strict",secure:true});

            res.status(201).json({message:"user register successfully..!!",user});

        } catch (error) {
            res.status(400).json({message:(error as Error).message});
        }
    }


}