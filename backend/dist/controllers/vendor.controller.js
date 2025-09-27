"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorController = void 0;
const vendor_service_1 = require("../services/vendor.service");
class vendorController {
    constructor() {
        this.VendorService = new vendor_service_1.vendorService();
        // vendor Registration 
        this.registerVendor = async (req, res) => {
            try {
                const { resturentName, licenceNumber, name, email, mobile, password } = req.body;
                const { user } = await this.VendorService.registerVendor({ resturentName, licenceNumber, name, email, mobile, password });
                res.cookie("otpEmail", email, { httpOnly: true, sameSite: "strict", secure: true });
                res.status(201).json({ message: "user register successfully..!!", user });
            }
            catch (error) {
                res.status(400).json({ message: error.message });
            }
        };
    }
}
exports.vendorController = vendorController;
//# sourceMappingURL=vendor.controller.js.map