import { Request, Response } from "express";
import { IVendorService } from "../services/interface/vendor.service.interface";
import { IVendorController } from "./interface/vendor.controller.interface";
export declare class vendorController implements IVendorController {
    private _vendorService;
    constructor(_vendorService: IVendorService);
    registerVendor: (req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=vendor.controller.d.ts.map