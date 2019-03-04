const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const nodemailer = require("nodemailer")
const path = require('path')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve our api route /cow that returns a custom talking text cow
app.post('/api/form', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h2>Contact Details</h2>
        <ul>
            <li> Name: ${req.body.name} </li>
            <li> Name: ${req.body.email} </li>
            <li> Name: ${req.body.text} </li>
        `
        
        let transporter= nodemailer.createTransport({
            host:'smtp.ethereal.email',
            port:587,
            auth:{
                user:"gxvucdww5qxk3pse@ethereal.email",
                pass:"UMDme2mjJwK4qeX9Uq"
            }            
        })

        let mailOptions = {
            from:"ryangendel@whatupgggg.com",
            to: "gxvucdww5qxk3pse@ethereal.email",
            replyTo:"ggggentuit@yahhhhh.com",
            subject:"Portfolio Message",
            text: req.body.name,
            html: htmlEmail
        }
        transporter.sendMail(mailOptions, (err, info)=>{
            if (err){
                return console.log("error")
            }
            // alert("Message sent" + info.messageId)
            // console.log("mnessage url " + nodemailer.getTestMessageUrl(info))
        })
    })
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))
// Anything that doesn't match the above, send back index.html
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/client/build/index.html'))
// })
// Choose the port and start the server

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Mixing it up on port ${PORT}`)
})