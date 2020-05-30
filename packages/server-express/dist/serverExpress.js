"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var lib_hello_1 = require("@mxro/lib-hello");
// Create a new express app instance
var app = express_1.default();
app.get('/', function (req, res) {
    res.send(lib_hello_1.message);
});
app.listen(3000, function () {
    console.log('App is listening on port 3000!');
});
//# sourceMappingURL=serverExpress.js.map