const nodemailer = require('nodemailer');
const dotenv = require("dotenv");
const text = require('body-parser/lib/types/text');
dotenv.config({ path: "./config.env" });
const EmailUser=process.env.EmailUser;
const EmailPassword=process.env.EmailPassword;
module.exports.sendMail = async function sendMail(email,str){
    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: EmailUser,
        pass: EmailPassword,
      },
    });
    // Define the email options
    let mailOptions = {
      from: EmailUser,
      to: email,
      subject:"Portfolio Query",
      text: str,
    };
    try {
        transporter.sendMail(mailOptions, (error, info)=>{
            if (error) {
              console.error('Error:', error);
            } else {
              console.log('Email sent:', info.response);
            }
        });
    } catch (error) {
        console.error('Error uploading file:', error);
        throw error;
    }
};