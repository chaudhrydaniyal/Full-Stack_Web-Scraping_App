const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser');

const scrapers = require('./scrapers');
const db = require('./database')



app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // disabled for security on local
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});


app.get('/players', async (req, res) => {
    const players = await db.getAllPlayers();
    res.send(players)
})


async function formalcall(){
const channelData = await scrapers.scrape('https://www.mancity.com/players/mens');
var i;
var lim=channelData.el2.length;

for (i = 0; i < lim; i++) { 
  
    await db.insertPlayername(i,channelData.el1[i],channelData.el2[i]);
    
}


var lim=channelData.el2.length;
console.log(lim);

var lim1=channelData.el1.length;
console.log(lim1);


}

formalcall();



app.listen(port, () => console.log(`Example app listening on port ${port}!`))