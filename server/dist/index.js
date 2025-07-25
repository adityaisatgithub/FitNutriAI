"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongodbServerConnection_1 = __importDefault(require("./config/mongodbServerConnection"));
dotenv_1.default.config();
const app = (0, express_1.default)();
(0, mongodbServerConnection_1.default)();
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.send("Hello, TypeScript with Express!");
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
