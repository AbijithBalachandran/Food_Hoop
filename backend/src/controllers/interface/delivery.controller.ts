import { Request,Response } from "express";

export interface IDeliveryController {
    registerDelivery(req:Request,res:Response):Promise<void>;
}