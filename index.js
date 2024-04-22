// Imports
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

require("dotenv").config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Librairies de routes
const barRouter = require("./routers/barRouter");
const biereRouter = require("./routers/biereRouter");
const commandeRouter = require("./routers/commandeRouter");

// Association Models
const { Association } = require("./models/Association");

app.get("/", (req, res) => {
  res.send("<h1>Bar Project</h1>");
});

// Routes
app.use("/bar", barRouter);
app.use("/biere", biereRouter);
app.use("/commande", commandeRouter);

Association();

app.listen(process.env.PORT, () => {
  console.log(`App Running on http://localhost:${process.env.PORT}`);
});
