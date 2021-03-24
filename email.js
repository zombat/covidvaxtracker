require('dotenv').config();
const   nodemailer = require(`nodemailer`),
        transporter = nodemailer.createTransport({
          service: `gmail`,
          auth: {
            user: process.env.EMAILADDRESS,
            pass: process.env.EMAILPASSWORD
          }
        });

module.exports.sendEmail = (toEmail, subjectLine, emailText) => {
  	let mailOptions = {
  		from: process.env.EMAILADDRESS,
  		to: toEmail,
  		subject: subjectLine,
  		text: emailText
  	};
  	transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log(`${new Date()} - Email sent - ${info.response}`);
      }
    });
  }
