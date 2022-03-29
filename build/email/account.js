"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendCancelationEmail = exports.sendWellcomeEmail = void 0;
var index_1 = require("../configs/index");
var sgMail = require('@sendgrid/mail');
sgMail.setApiKey(index_1.send_gird_key);
var sendWellcomeEmail = function (email, name) {
    sgMail.send({
        to: email,
        from: 'bang33q@outlook.com.vn',
        subject: 'Thanks for joining in!',
        text: "Wellcome to the app, ".concat(name, ". Let me know how you get along with me!"),
        html: '<div> <h1>Thanks to</h1> </div>',
    });
};
exports.sendWellcomeEmail = sendWellcomeEmail;
var sendCancelationEmail = function (email, name) {
    sgMail.send({
        to: email,
        from: 'bang33q@outlook.com.vn',
        subject: 'Sorry to see you go!',
        text: "Goodbye, ".concat(name, ". I hope to see back sometime tou soon"),
    });
};
exports.sendCancelationEmail = sendCancelationEmail;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbWFpbC9hY2NvdW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBDQUFpRDtBQUVqRCxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUV6QyxNQUFNLENBQUMsU0FBUyxDQUFDLHFCQUFhLENBQUMsQ0FBQztBQVV6QixJQUFNLGlCQUFpQixHQUFHLFVBQUMsS0FBYSxFQUFFLElBQVk7SUFDM0QsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNWLEVBQUUsRUFBRSxLQUFLO1FBQ1QsSUFBSSxFQUFFLHdCQUF3QjtRQUM5QixPQUFPLEVBQUUsd0JBQXdCO1FBQ2pDLElBQUksRUFBRSwrQkFBd0IsSUFBSSw2Q0FBMEM7UUFDNUUsSUFBSSxFQUFFLGlDQUFpQztLQUN4QyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFSVyxRQUFBLGlCQUFpQixxQkFRNUI7QUFFSyxJQUFNLG9CQUFvQixHQUFHLFVBQUMsS0FBYSxFQUFFLElBQVk7SUFDOUQsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNWLEVBQUUsRUFBRSxLQUFLO1FBQ1QsSUFBSSxFQUFFLHdCQUF3QjtRQUM5QixPQUFPLEVBQUUsc0JBQXNCO1FBQy9CLElBQUksRUFBRSxtQkFBWSxJQUFJLDJDQUF3QztLQUMvRCxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFQVyxRQUFBLG9CQUFvQix3QkFPL0IifQ==