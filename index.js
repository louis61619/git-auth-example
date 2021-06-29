const express = require('express');
const https = require('https');
const fs = require('fs');
const port = 3000;

var key = fs.readFileSync(__dirname + '/key.pem');
var cert = fs.readFileSync(__dirname + '/cert.pem');
var options = {
  key: key,
  cert: cert
};

app = express()
app.use(express.static('./'))

var server = https.createServer(options, app);

server.listen(port, () => {
  console.log("server starting on port : " + port)
});