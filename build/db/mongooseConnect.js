"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
var index_1 = require("../configs/index");
mongoose
    .connect(index_1.mongodb_server)
    .then(function () {
    console.log('Connected Successful');
})
    .catch(function () {
    console.error('Error in the Connection');
});
