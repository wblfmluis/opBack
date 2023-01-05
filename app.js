const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

let corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
  methods: "GET, PUT, POST, DELETE",
  credentials: true,
};

app.use(cors(corsOptions));
global.__basedir = __dirname;
process.env.TZ = "America/Mexico_City";
app.use(logger("dev"));
/* Encoding Requets */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
/* Encoding Requets */
const routes = require("./routes/index");
app.use("/", routes);

const db = require("./models/operadoresDB");
db.sequelize.sync();
module.exports = app;
