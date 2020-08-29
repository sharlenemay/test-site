const router = require("express").Router();
const MailchimpRoutes = require("./MailchimpAPI");
const NodemailerRoutes = require("./NodemailerAPI");

router.use(MailchimpRoutes);
router.use(NodemailerRoutes);

module.exports = router;