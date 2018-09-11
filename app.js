const express = require('express');
const request = require('request-promise');
const bodyParser = require('body-parser')

var app = express();

//O arduino vai ser vendido com o ID de seu usuario.
const userId = "5b97e093ab0ec50686bab37d";
const hortaId = "5b97e0a6ab0ec50686bab37e";

//Every 12 hours it will get this data:
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
var hh = today.getHours();
var mmm = today.getMinutes();
today = mm + '/' + dd + '/' + yyyy + "-" + hh + ":" + mmm;

/*var email = getArduino();
var ph = getArduino();
var data = getArduino();
var turbidez = getArduino();
var vazao = getArduino();
var umidadeRelAr = getArduino();
var temperatura = getArduino();*/

data = {
    "userId":  userId,
    "id": hortaId,
    "ph": 3,
    "data": today,
    "turbidez": 2424,
    "vazao": 24.4,
    "umidadeRelAr": 2111,
    "temperatura": 5533112
};


var requestObject = {
    method: 'POST',
    uri: 'http://10.0.0.12:3002/arduinoapi',
    body: data,
    json: true // Automatically stringifies the body to JSON
};

setInterval(function(){
    request(requestObject)
    .then(function (parsedBody) {
        console.log("sucesso!");
    })
    .catch(function (err) {
        console.log(err);
});
}, 3000);

//43200000

app.listen(3001, function(){
    console.log("Arduino is running...");
    
});