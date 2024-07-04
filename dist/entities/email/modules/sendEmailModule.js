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
Object.defineProperty(exports, "__esModule", { value: true });
// Services
const services_1 = require("../services");
// Utils
const utils_1 = require("../../../utils");
const sendEmailModule = (req) => __awaiter(void 0, void 0, void 0, function* () {
    // Desestructurate body data
    const { emailAddress, subject } = req.body;
    // Read local template and replace placeholders with real values
    const templateResult = yield (0, services_1.setUpEmailTemplateService)(req);
    if (!templateResult || !templateResult.template) {
        return {
            ok: false,
            statusCode: utils_1.statusCodes.BAD_REQUEST,
            message: 'Error setting up email template'
        };
    }
    const { template } = templateResult;
    const emailOptionsResult = yield (0, services_1.prepareEmailOptionsService)(subject, template, emailAddress);
    if (!emailOptionsResult || !emailOptionsResult.mailOptions || !emailOptionsResult.transporter) {
        return {
            ok: false,
            statusCode: utils_1.statusCodes.BAD_REQUEST,
            message: 'Error preparing email options'
        };
    }
    const { mailOptions, transporter } = emailOptionsResult;
    try {
        // Send email
        const { ok, statusCode, message } = yield (0, services_1.sendEmailService)(transporter, mailOptions);
        return {
            ok,
            statusCode,
            message
        };
    }
    catch (error) {
        utils_1.logger.consoleErrorsHandler(error, 'sendEmailModule');
        return {
            ok: false,
            statusCode: utils_1.statusCodes.BAD_REQUEST,
            message: error
        };
    }
});
exports.default = sendEmailModule;
//# sourceMappingURL=sendEmailModule.js.map