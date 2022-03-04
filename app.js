//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const axios = require('axios');

const app = express();

const dstreetalertcheck = "-1001793121016";
const dstreetlivechat = "-1001643333515";
const us30signals = "-1001754059003";

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get("/", function(req, res){
    res.send("welcome to backend server");
});

app.post('/', jsonParser, async (req, res) => {
    console.log(req.body);
    if(req.body.msg !== undefined ) {
        await axios.post('https://api.telegram.org/bot5007955067:AAGCvnc1AhD0Y11ukuM4zuuCKTb3obJVlwM/sendMessage?chat_id='+ dstreetlivechat +'&text='+req.body.msg);
        await axios.post('https://api.telegram.org/bot5007955067:AAGCvnc1AhD0Y11ukuM4zuuCKTb3obJVlwM/sendMessage?chat_id='+ dstreetalertcheck +'&text='+req.body.msg);
        res.json({"return" : "success"});
    } else {
        res.json({"return" : "failiure"});
    }
});

app.post('/us30', bodyParser.text({type: '*/*'}), async (req, res) => {
    console.log(req.body);
    // if(req.body.msg !== undefined ) {
        await axios.post('https://api.telegram.org/bot5007955067:AAGCvnc1AhD0Y11ukuM4zuuCKTb3obJVlwM/sendMessage?chat_id='+ us30signals +'&text='+req.body);
        res.json({"return" : "success"});
    // } else {
    //     res.json({"return" : "failiure"});
    // }
});

app.post('/test', jsonParser, async (req, res) => {
    console.log(req.body);
});

let port = process.env.PORT;
if(port == null || port == '' ) {
    port = 3001;
}

app.listen(port, function(){
    console.log("server started on port 3001");
});
