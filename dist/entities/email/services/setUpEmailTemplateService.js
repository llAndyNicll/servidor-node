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
// Node
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// Utils
const utils_1 = require("../../../utils");
const setUpEmailTemplateService = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, lastName, emailAddress, subject, message } = req.body;
    try {
        const templatePath = path_1.default.join(process.cwd(), 'email', 'emailTemplate.html');
        let template = fs_1.default.readFileSync(templatePath, 'utf8');
        template = template.replace('{{name}}', name)
            .replace('{{lastName}}', lastName)
            .replace('{{emailAddress}}', emailAddress)
            .replace('{{subject}}', subject)
            .replace('{{message}}', message);
        return {
            template
        };
    }
    catch (error) {
        utils_1.logger.consoleErrorsHandler(error, 'setUpEmailTemplateService');
    }
});
exports.default = setUpEmailTemplateService;
//# sourceMappingURL=setUpEmailTemplateService.js.map