var express = require('express');
var app = express();

app.get('/',function (req,res) {
	res.send(200,'Hello With Express Server');
});

app.listen(19919);