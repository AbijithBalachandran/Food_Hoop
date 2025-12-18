
import { Request,Response } from "express";
import { VendorService } from "../services/vendor.service";
import { IVendorService } from "../services/interface/vendor.service.interface";
import { IVendorController } from "./interface/vendor.controller.interface";


export class vendorController implements IVendorController{

   constructor( private _vendorService:IVendorService){};

    // vendor Registration ===========================================

    registerVendor = async(req:Request,res:Response):Promise<void>=>{
        try {
            
            const {resturentName,licenceNumber,name,email,mobile,password} = req.body;
            const {user} = 
            await this._vendorService.registerVendor({ resturentName,licenceNumber,name,email,mobile,password});
          
            res.cookie("otpEmail",email,{httpOnly:true,sameSite:"strict",secure:true});

            res.status(201).json({message:"user register successfully..!!",user});

        } catch (error) {
            res.status(400).json({message:(error as Error).message});
        }
    }


}