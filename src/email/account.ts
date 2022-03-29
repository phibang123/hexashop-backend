import { send_gird_key } from '../configs';

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(send_gird_key);

// sgMail.send({
//   to: "phibang7899@gmail.com",
//   from: "bang33q@outlook.com.vn",
//   subject: "Fuck boi quan 10",
//   text: "Fuck boi quận 10 chơi tinder cua gái"

// })

export const sendWellcomeEmail = (email: string, name: string) => {
  sgMail.send({
    to: email,
    from: 'bang33q@outlook.com.vn',
    subject: 'Thanks for joining in!',
    text: `Wellcome to the app, ${name}. Let me know how you get along with me!`,
    html: '<div> <h1>Thanks to</h1> </div>',
  });
};

export const sendCancelationEmail = (email: string, name: string) => {
  sgMail.send({
    to: email,
    from: 'bang33q@outlook.com.vn',
    subject: 'Sorry to see you go!',
    text: `Goodbye, ${name}. I hope to see back sometime tou soon`,
  });
};
