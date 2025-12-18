"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
class AdminController {
    constructor(_adminService) {
        this._adminService = _adminService;
        // vendor Registration 
        this.registerAdmin = async (req, res) => {
            try {
                const { name, email, mobile, password } = req.body;
                const { user } = await this._adminService.registerAdmin({ name, email, mobile, password });
                res.cookie("otpEmail", email, { httpOnly: true, sameSite: "strict", secure: true });
                res.status(201).json({ message: "user register successfully..!!", user });
            }
            catch (error) {
                res.status(400).json({ message: error.message });
            }
        };
    }
}
exports.AdminController = AdminController;
//# sourceMappingURL=admin.controller.js.map