const nodemailer = require('nodemailer');
const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'thismytesting@gmail.com',
        pass: 'regainwealth',
    },
});
const mailOptions = {
    from: 'thismytesting@gmail.com',
    to: 'f20190350@pilani.bits-pilani.ac.in',
    subject: 'hello world!',
    text: 'hello world!',
};

transport.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
});