const express = require('express');
const app = express();

app.get('/', (req,res) => res.send("tefds"))

module.exports = app;