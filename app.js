//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const axios = require('axios');

const app = express();

const dstreetalertcheck = "-1001793121016";
const dstreetlivechat = "-1001643333515";
const tradingsignals = "-1001663177708";

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get("/", function(req, res){
    res.send("welcome to backend server");
});

app.post('/', jsonParser, async (req, res) => {
    console.log(req.body);
    await axios.post('https://api.telegram.org/bot5007955067:AAGCvnc1AhD0Y11ukuM4zuuCKTb3obJVlwM/sendMessage?chat_id='+ tradingsignals +'&text='+req.body.text);
    await axios.post('https://api.telegram.org/bot5007955067:AAGCvnc1AhD0Y11ukuM4zuuCKTb3obJVlwM/sendMessage?chat_id='+ dstreetlivechat +'&text='+req.body.text);
    await axios.post('https://api.telegram.org/bot5007955067:AAGCvnc1AhD0Y11ukuM4zuuCKTb3obJVlwM/sendMessage?chat_id='+ dstreetalertcheck +'&text='+req.body.text);
    res.json({"return" : "success"});
});

let port = process.env.PORT;
if(port == null || port == '' ) {
    port = 3001;
}

app.listen(port, function(){
    console.log("server started on port 3001");
});
