import { Request, Response } from "express";
import { IAdminService } from "../services/interface/admin.service.interface";
export declare class AdminController implements AdminController {
    private _adminService;
    constructor(_adminService: IAdminService);
    registerAdmin: (req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=admin.controller.d.ts.map