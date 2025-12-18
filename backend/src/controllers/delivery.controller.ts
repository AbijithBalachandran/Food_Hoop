
import { Request,Response } from "express";
import { DeliveryService } from "../services/delivery.service";
import { IDeliveryController } from "./interface/delivery.controller";
import { IDeliveryService } from "../services/interface/delivery.service.interface";


export class DeliveryController  implements IDeliveryController{

    constructor(private _deliveryService:IDeliveryService){};

    // vendor Registration =================================================

    registerDelivery = async(req:Request,res:Response):Promise<void>=>{
        try {
            
            const {name,email,city,mobile,password} = req.body;
            const {user} = 
            await this._deliveryService.registerDelivery({name,email,city,mobile,password});
          
            res.cookie("otpEmail",email,{httpOnly:true,sameSite:"strict",secure:true});

            res.status(201).json({message:"user register successfully..!!",user});

        } catch (error) {
            res.status(400).json({message:(error as Error).message});
        }
    }


}