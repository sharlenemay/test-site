const express = require("express");
const Mailchimp = require("mailchimp-api-v3");
require("dotenv").config();

const mc_api_key = process.env.MAILCHIMP_API_KEY;
const list_id = process.env.MAILING_LIST_ID;

const app = express();

const mailchimp = new Mailchimp(mc_api_key);

const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
// app.get('/' ...);

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

app.listen(port);

console.log(`express app listening on port ${port}`);
