const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname+'/dist'));

app.listen(process.env.PORT || 8080);

// Path location stratogy
app.get('/*',(req,res) =>{
	res.sentFile(path.join(__dirname + '/dist/shopecorner12/index.html'));
});

console.log("Console listen!");