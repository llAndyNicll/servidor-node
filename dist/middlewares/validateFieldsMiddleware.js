"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateFields = void 0;
// Validator
const express_validator_1 = require("express-validator");
// Utils
const utils_1 = require("../utils");
const validateFields = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(utils_1.statusCodes.BAD_REQUEST).json(errors);
    }
    next();
};
exports.validateFields = validateFields;
//# sourceMappingURL=validateFieldsMiddleware.js.map