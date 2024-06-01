const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendConfirmationEmail = (to, name) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: to,
    subject: 'Registration Confirmation',
    text: `Hello ${name},\n\nThank you for registering!\n\nBest regards,\n COM Online Ltd`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

module.exports = { sendConfirmationEmail };