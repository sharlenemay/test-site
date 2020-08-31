const router = require("express").Router();
const nodemailer = require("nodemailer");

// Contact form post
router.post("/sendMail", (req, res) => {
  let data = req.body;
  console.log(data);
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