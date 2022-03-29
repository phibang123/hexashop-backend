"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendCancelationEmail = exports.sendWellcomeEmail = void 0;
var sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbWFpbC9hY2NvdW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBRXpDLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBVXhDLElBQU0saUJBQWlCLEdBQUcsVUFBQyxLQUFhLEVBQUUsSUFBWTtJQUMzRCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ1YsRUFBRSxFQUFFLEtBQUs7UUFDVCxJQUFJLEVBQUUsd0JBQXdCO1FBQzlCLE9BQU8sRUFBRSx3QkFBd0I7UUFDakMsSUFBSSxFQUFFLCtCQUF3QixJQUFJLDZDQUEwQztRQUM1RSxJQUFJLEVBQUUsaUNBQWlDO0tBQ3hDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQVJXLFFBQUEsaUJBQWlCLHFCQVE1QjtBQUVLLElBQU0sb0JBQW9CLEdBQUcsVUFBQyxLQUFhLEVBQUUsSUFBWTtJQUM5RCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ1YsRUFBRSxFQUFFLEtBQUs7UUFDVCxJQUFJLEVBQUUsd0JBQXdCO1FBQzlCLE9BQU8sRUFBRSxzQkFBc0I7UUFDL0IsSUFBSSxFQUFFLG1CQUFZLElBQUksMkNBQXdDO0tBQy9ELENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQVBXLFFBQUEsb0JBQW9CLHdCQU8vQiJ9