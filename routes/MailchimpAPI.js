const router = require("express").Router();
const Mailchimp = require("mailchimp-api-v3");
const mc_api_key = process.env.MAILCHIMP_API_KEY;
const list_id = process.env.MAILING_LIST_ID;
const mailchimp = new Mailchimp(mc_api_key);

router.get("/api/memberList", (req, res) => {
    mailchimp
    .get(`/lists/${list_id}/members`)
    .then(function (results) {
      res.send(results);
    })
    .catch(function (err) {
      res.send(err);
    });
});
router.post(`/api/memberList/:email`, (req, res) => {
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

module.exports = router;