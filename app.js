//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const axios = require('axios');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get("/", function(req, res){
    res.send("welcome to backend server");
});

app.post('/', urlencodedParser, async (req, res) => {
    console.log(req);
    const gainers = await axios.post('https://api.telegram.org/bot5007955067:AAGCvnc1AhD0Y11ukuM4zuuCKTb3obJVlwM/sendMessage?chat_id=-1001793121016&text='+req.body.text);
    console.log(gainers);
    res.json({"return" : "success"});
});

let port = process.env.PORT;
if(port == null || port == '' ) {
    port = 3001;
}

app.listen(port, function(){
    console.log("server started on port 3001");
});
