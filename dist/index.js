"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const cors = require("cors");
const port = process.env.PORT || 8080;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(cors());
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
// GET
app.get("/", function (req, res) {
    fs_1.default.readFile("./public/data/combinations.json", "utf-8", (err, data) => {
        if (err)
            throw err;
        console.log("DATA", data);
        res.send(data);
    });
});
// GET
app.get("/combinations", function (req, res) {
    fs_1.default.readFile("./public/data/combinations.json", "utf-8", (err, data) => {
        if (err)
            throw err;
        console.log("DATA", data);
        res.send(data);
    });
});
// POST
app.post("/combinations", function (req, res) {
    console.log("REQ.BODY!!!:", req.body);
    const data = JSON.stringify(req.body);
    console.log(typeof data);
    fs_1.default.writeFile("./public/data/combinations.json", data, (err) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error occured");
        }
        else {
            console.log("File written successfully\n");
            res.json(req.body);
        }
    });
});
