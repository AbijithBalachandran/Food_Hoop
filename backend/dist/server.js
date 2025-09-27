"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
// Handling middlwares ===========
app.use((0, cors_1.default)({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, morgan_1.default)('dev'));
// connecting database ==========
mongoose_1.default.connect("mongodb://127.0.0.1:27017/foodhop_user_management")
    .then(() => console.log('Mongodb connected'))
    .catch((err) => console.log('Error from mongodb connection', err));
// Routers =====================
const user_router_1 = __importDefault(require("./routes/user.router"));
const vendor_router_1 = __importDefault(require("./routes/vendor.router"));
const admin_router_1 = __importDefault(require("./routes/admin.router"));
const delivery_router_1 = __importDefault(require("./routes/delivery.router"));
const auth_router_1 = __importDefault(require("./routes/auth.router"));
app.use('/', user_router_1.default);
app.use('/vendor', vendor_router_1.default);
app.use('/admin', admin_router_1.default);
app.use('/delivery', delivery_router_1.default);
app.use('/auth', auth_router_1.default);
// starting server  =============
app.listen(5000, () => {
    console.log('http://localhost:5000');
});
//# sourceMappingURL=server.js.map