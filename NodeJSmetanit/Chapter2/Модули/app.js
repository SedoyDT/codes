const os = require("os")//get the name current user
const greeting = require("./greeting");
const User=require("./user.js");

let userName=os.userInfo().username;

let eugene = new User("Eugene", 32)
eugene.sayHi();
console.log(`request date: ${greeting.date}`);
console.log(greeting.getMessage(userName))