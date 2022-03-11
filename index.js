"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var port = process.env.npm_package_config_port || 4005;
var runningMessage = 'Server is running ' + port;
app.get('/', function (req, res) {
    console.log('API successfully requested');
    res.send(runningMessage + 'hello!');
});
var server = app.listen(port, function () {
    console.log(runningMessage);
});
module.exports = server;
