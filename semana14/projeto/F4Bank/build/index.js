"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
module.exports.getAllUsers = function () {
    const users = fs.readFileSync("./data.json").toString();
    console.log(users);
};
//# sourceMappingURL=index.js.map