"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Nodemailer
const nodemailer_1 = __importDefault(require("nodemailer"));
// Utils
const utils_1 = require("../../../utils");
const prepateEmailOptionsService = (subject, template, emailAddress) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let transporter = nodemailer_1.default.createTransport({
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT),
            secure: true,
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD
            }
        });
        let mailOptions = {
            from: emailAddress,
            to: process.env.EMAIL_USERNAME,
            subject: `Asunto: ${subject}`,
            html: template
        };
        return {
            mailOptions,
            transporter
        };
    }
    catch (error) {
        utils_1.logger.consoleErrorsHandler(error, 'prepateEmailOptionsService');
    }
});
exports.default = prepateEmailOptionsService;
//# sourceMappingURL=prepareEmailOptionsService.js.map