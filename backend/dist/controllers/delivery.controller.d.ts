import { Request, Response } from "express";
import { IDeliveryController } from "./interface/delivery.controller";
import { IDeliveryService } from "../services/interface/delivery.service.interface";
export declare class DeliveryController implements IDeliveryController {
    private _deliveryService;
    constructor(_deliveryService: IDeliveryService);
    registerDelivery: (req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=delivery.controller.d.ts.map