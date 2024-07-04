"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Express
const express_1 = require("express");
// Express Validator
const express_validator_1 = require("express-validator");
// Controllers
const controllers_1 = require("../controllers");
// Middlewares
const middlewares_1 = require("../../../middlewares");
const router = (0, express_1.Router)();
// SendEmail: api/email/contact
router.post('/contact', [
    (0, express_validator_1.check)('name', 'El nombre es necesario').not().isEmpty(),
    (0, express_validator_1.check)('lastName', 'El apellido es necesario').not().isEmpty(),
    (0, express_validator_1.check)('emailAddress', 'El correo electrónico es necesario').isEmail(),
    (0, express_validator_1.check)('subject', 'El asunto es necesario').not().isEmpty(),
    (0, express_validator_1.check)('message', 'El mensaje es necesario').not().isEmpty(),
    middlewares_1.validateFields
    // TODO: Validate fields middleware
], controllers_1.sendEmailController);
exports.default = router;
//# sourceMappingURL=emailRoutes.js.map