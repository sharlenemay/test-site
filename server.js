const express = require("express");
const bodyParser = require("body-parser");
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require("cors");
require("dotenv").config();

// const mc_api_key = process.env.MAILCHIMP_API_KEY;
// const list_id = process.env.MAILING_LIST_ID;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

const routes = require("./routes");

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Add routes, both API and view
app.use("/api", routes);
app.use("/api", createProxyMiddleware({ target: 'http://localhost:3001/', changeOrigin: true }));

app.listen(PORT, () => {
  console.log(`server starting at port ${PORT}`);
})