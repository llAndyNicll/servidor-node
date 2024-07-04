"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// DotEnv
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Server
const models_1 = require("./models");
const server = new models_1.Server();
server.listen();
//# sourceMappingURL=app.js.map