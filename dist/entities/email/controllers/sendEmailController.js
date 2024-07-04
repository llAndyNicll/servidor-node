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
// Modules
const modules_1 = require("../modules");
/**
 * Handler description
 *
 * PATH: /api/...
 * AUTH-REQUIRED: false
 * ADMIN-REQUIRED: false
 *
 * @param { Object } req - The HTTP request object.
 * @param { Object } res - The HTTP response object.
 * @returns { void }
 */
const sendEmailController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { ok, statusCode, message } = yield (0, modules_1.sendEmailModule)(req);
        res.status(statusCode).json({
            ok,
            message
        });
    }
    catch (error) {
        utils_1.logger.consoleErrorsHandler(error, 'sendEmailController');
        res.status(utils_1.statusCodes.SERVER_ERROR).json({
            ok: false,
            message: utils_1.messages.SERVER_ERROR
        });
    }
});
exports.default = sendEmailController;
//# sourceMappingURL=sendEmailController.js.map