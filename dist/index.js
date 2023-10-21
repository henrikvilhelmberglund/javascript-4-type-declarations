"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const url = "https://jsonplaceholder.typicode.com/ausers";
axios_1.default
    .get(url)
    .then((response) => response.data.forEach(printBaseUserInfo))
    .catch((error) => console.log(error));
function printBaseUserInfo(user) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
    console.log(user.address.street);
    console.log(user.address.city);
    console.log(user.address.zipcode);
    console.log("");
    console.log("----------------------");
    console.log("");
}
