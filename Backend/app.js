const express= require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const docDataRoute = require("./routes/docController");
const newsDataRoute = require("./routes/newsController");
const cors = require("cors");

require("dotenv/config");

const app = express();

app.use(cors())

app.use(bodyParser.json());

app.use("/doctor", docDataRoute);
app.use("/noticia", newsDataRoute);

app.get("/", (req, res) => {
    res.send("Home")
});

mongoose.connect(process.env.DB_CONNECTION, () => console.log("Connected to DB"));

app.listen(5000);
