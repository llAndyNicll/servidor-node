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
// Utils
const utils_1 = require("../../../utils");
const sendEmailService = (transporter, mailOptions) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield transporter.sendMail(mailOptions);
        return {
            statusCode: utils_1.statusCodes.SUCCESS,
            ok: true,
            message: utils_1.messages.SEND_EMAIL
        };
    }
    catch (error) {
        utils_1.logger.consoleErrorsHandler(error, 'sendEmailService');
        return {
            statusCode: utils_1.statusCodes.BAD_REQUEST,
            ok: false,
            message: utils_1.messages.SEND_EMAIL_ERROR
        };
    }
});
exports.default = sendEmailService;
//# sourceMappingURL=sendEmailService.js.map