"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryController = void 0;
const delivery_service_1 = require("../services/delivery.service");
class DeliveryController {
    constructor() {
        this.DeliveryService = new delivery_service_1.DeliveryService();
        // vendor Registration =================================================
        this.registerDelivery = async (req, res) => {
            try {
                const { name, email, city, mobile, password } = req.body;
                const { user } = await this.DeliveryService.registerDelivery({ name, email, city, mobile, password });
                res.cookie("otpEmail", email, { httpOnly: true, sameSite: "strict", secure: true });
                res.status(201).json({ message: "user register successfully..!!", user });
            }
            catch (error) {
                res.status(400).json({ message: error.message });
            }
        };
    }
}
exports.DeliveryController = DeliveryController;
//# sourceMappingURL=delivery.controller.js.map