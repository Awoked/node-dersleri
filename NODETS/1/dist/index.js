"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var router = express_1.default.Router();
var port = 8181;
app.use(router);
var newUser = {
    id: "1",
    userName: "Alper",
    password: "1234",
    email: undefined,
    phone: undefined
};
router.get('/', function (req, res) {
    res.json(newUser);
});
app.listen(port, function () {
    console.log("http://localhost:".concat(port));
});
