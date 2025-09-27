"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSlug = void 0;
const slugify_1 = __importDefault(require("slugify"));
const userModel_1 = require("../models/userModel");
const generateSlug = async (name) => {
    let baseSlug = (0, slugify_1.default)(name, { lower: true });
    let slug = baseSlug;
    let count = 1;
    while (await userModel_1.UserModel.exists({ slug })) {
        slug = `${baseSlug}_${count}`;
    }
    return slug;
};
exports.generateSlug = generateSlug;
//# sourceMappingURL=generateSlug.js.map