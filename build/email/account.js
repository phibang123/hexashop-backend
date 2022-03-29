"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendCancelationEmail = exports.sendWellcomeEmail = void 0;
var sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// sgMail.send({
//   to: "phibang7899@gmail.com",
//   from: "bang33q@outlook.com.vn",
//   subject: "Fuck boi quan 10",
//   text: "Fuck boi quận 10 chơi tinder cua gái"
// })
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
