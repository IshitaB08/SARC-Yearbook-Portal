const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = (email, subject, text) => {
  const mail = {
  to: email,
  from: 'f20180306@pilani.bits-pilani.ac.in',
  subject: subject,
  text: text
  // html: '<strong>and easy to do anywhere, even with Node.js</strong>'
}
};

sgMail.send(msg).then(() => {
  console.log('Message sent')
}).catch((error) => {
  console.log(error.response.body)
  // console.log(error.response.body.errors[0].message)
})