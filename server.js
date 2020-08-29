const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const Mailchimp = require("mailchimp-api-v3");
require("dotenv").config();

const mc_api_key = process.env.MAILCHIMP_API_KEY;
const list_id = process.env.MAILING_LIST_ID;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

const mailchimp = new Mailchimp(mc_api_key);

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes

// Contact form post
app.post("/api/sendMail", (req, res) => {
  let data = req.body;
  let smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "mykakug129@gmail.com",
      pass: "kim$oohyun00"
    }
  })

  let mailOptions = {
    from: data.email,
    to: "mykakug129@gmail.com",
    subject: "Jo the Fish Contact Form",
    html: `
    <h3>Jo the Fish Contact Form</h3>
    <ul>
      <li>Name: ${data.name}</li>
      <li>Email: ${data.email}</li>
    </ul>
    <h4>Message</h4>
    <p>${data.message}</p>
    `
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if(error) {
      res.send(error);
    } else {
      res.send(`Success`);
    }
  })

  smtpTransport.close();
})

app.get("/api/memberList", (req, res) => {
  mailchimp
  .get(`/lists/${list_id}/members`)
  .then(function (results) {
    res.send(results);
  })
  .catch(function (err) {
    res.send(err);
  });
});
app.post(`/api/memberList/:email`, (req, res) => {
  mailchimp
  .post(`/lists/${list_id}/members`, {
    email_address: req.params.email,
    status: "subscribed",
  })
  .then(() => {
    console.log("email added");
  })
  .catch((err) => {
    res.status(401).json(err);
  });
});

app.listen(PORT, () => {
  console.log(`server starting at port ${PORT}`);
})