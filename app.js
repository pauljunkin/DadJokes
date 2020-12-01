const path = require('path');
const request = require('request');
const express = require('express');
const app = express();

const apiKey = "";
const data = "https://icanhazdadjoke.com/slack"
var joke = ""

app.set("views", path.resolve(__dirname, "templates"));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    request(data, (err, response, body) => {
        let temp = JSON.parse(body);
        joke = temp.attachments[0].text
    })
    let joketext = {line : joke}
    res.render("result", joketext);
});

app.get('*', (req, res) => {
  res.send('The route does not exist.');
});

app.listen(process.env.PORT || 8000, () => {
  console.log('Example express app listening on port 8000!')
});