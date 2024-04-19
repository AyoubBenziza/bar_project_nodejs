const express = require('express');
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send('<h1>Bar Project</h1>');
})

app.listen(process.env.PORT, () => {
    console.log(`App Running on http://localhost:${process.env.PORT}`);
});