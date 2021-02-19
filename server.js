const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

var compression = require("compression");
app.use(compression());

const routes = require("./routes");

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Add routes, both API and view
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`server starting at port ${PORT}`);
})