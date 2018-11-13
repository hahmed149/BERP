require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
const vision = require('./vision');


var fs = require('fs');

urlForImg = "text.jpeg"
urlForImg2 = "/Volumes/OPEN_MV/text.jpeg"
data = ""

app.listen(3000, function () {
  console.log('BERP app listening on port 3000!')

  vision.visionEngine(urlForImg2, function(detections) {
    data = detections;
    data.forEach(text => fs.writeFile("result.txt",text.description,function(err,data){}));
  });
})