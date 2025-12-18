import { Request,Response } from "express";

export interface IAdminController {
    registerAdmin(req:Request,res:Response):Promise<void>;
}