const router = require("express").Router();
const nodemailer = require("nodemailer");

// Contact form post
router.post("/sendMail", (req, res) => {
  let data = req.body;
  let smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  })

  let mailOptions = {
    from: data.email,
    to: process.env.GMAIL_USER,
    subject: "Jo the Fish Contact Form",
    html: `
    <h2>Jo the Fish Contact Form</h2>
    <h4><strong>Name:</strong> ${data.name}</h4>
    <h4><strong>Email:</strong> ${data.email}</h4>
    <h4>Message:</h4>
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

module.exports = router;