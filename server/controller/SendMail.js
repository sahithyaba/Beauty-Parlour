const dotenv = require("dotenv");
const nodemailer = require('nodemailer');
dotenv.config({path: `./../config.env`});
 
 
const sendAdmin = (req,res) => {
    const {date,time,package,no_of_people,price} = req.body;
    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            /*XOAuth2: {
                user: process.env.EMAIL, // Your gmail address.
                                                      // Not @developer.gserviceaccount.com
                clientId: "931868992013-7k6muq2ap7e1h2tsgfldvrg218465a4i.apps.googleusercontent.com",
                clientSecret: "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",
                refreshToken: "1//04IusfdfUpjfrCgYIARAAGAQSNwF-L9Ir8VuqY78bB5S413cRUitM0iQjkzjYJUzK6I7ppIQP-cAw_R9e38-4orYLWPpitiLcKTY"
              },*/
            user: "sabarishk.20cse@kongu.edu",
            pass: "03-Oct-2003"
        },
        
    });
    let mailDetails = {
        from: process.env.EMAIL,
        to: 'studysabarish@gmail.com',
        subject: 'slot Conformation',
        text: `Welcome to Fancy Beauty Parlour
        your slot is conformed on `+date+` at `+time,
    };

    
    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            console.log('Error Occurs');
            console.log(err);
        } else {
            console.log('Email sent successfully');
        }  
    });
    res.send("Your Slot has benn booked successfully");
}


module.exports = {sendAdmin};