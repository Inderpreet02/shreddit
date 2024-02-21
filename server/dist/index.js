"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./common/db"));
const app = (0, express_1.default)();
const PORT = 3000;
app.get("/health-check", (e) => {
    console.log(e);
});
app.listen(PORT, () => {
    (0, db_1.default)()
        .then(() => {
        console.log("connected to DB");
    })
        .catch(() => {
        console.log("Failed to connect to DB");
        process.exit(1);
    });
    console.log(`serverasdaasdassd is up on http://localhost:${PORT}`);
});
