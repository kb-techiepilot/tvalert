//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const axios = require('axios');

const app = express();

const tos = "-1001609755951";
const crude = "-1001628900776";

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get("/", function(req, res){
    res.send("welcome to backend server");
});

app.post('/tos', bodyParser.text({type: '*/*'}), async (req, res) => {
    console.log(req.body);
        await axios.post('https://api.telegram.org/bot5150570041:AAE3nCMT19DImKBaFFhq4ffLrBK7WR6kRZE/sendMessage?chat_id='+ tos +'&text='+req.body);
        res.json({"return" : "success"});
});

app.post('/alerts', bodyParser.text({type: '*/*'}), async (req, res) => {
    console.log(req.body);
        await axios.post('https://api.telegram.org/bot5150570041:AAE3nCMT19DImKBaFFhq4ffLrBK7WR6kRZE/sendMessage?chat_id='+ crude +'&text='+req.body);
        res.json({"return" : "success"});
});

app.get('/corntab', bodyParser.text({type: '*/*'}), async (req, res) => {
    console.log(req.body);
        await axios.post('https://api.telegram.org/bot5150570041:AAE3nCMT19DImKBaFFhq4ffLrBK7WR6kRZE/sendMessage?chat_id='+ tos +'&text='+req.body);
        res.json({"return" : "success"});
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
