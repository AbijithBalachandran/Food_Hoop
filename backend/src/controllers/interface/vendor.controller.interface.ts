import { Request,Response } from "express";

export interface IVendorController {
    registerVendor(req:Request,res:Response):Promise<void>;
}