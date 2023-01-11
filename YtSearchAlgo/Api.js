const express = require('express');
const app = express();
const { connectMongo, search } = require("./Mongo")
const bodyP = require("body-parser")
let key = "hggaf"
console.log(bodyP)
connectMongo();
app.use(bodyP.json());
app.get('/', function (req, res) {
    res.sendFile('E:/websitesallprojects/YtSearchAlgo/index.html');
})
app.get('/upload', function (req, res) {
    res.sendFile('E:/websitesallprojects/YtSearchAlgo/Upload.html');
})
app.post('/getVid', async function (req, res) {
    const query = req.body.keyword
    console.log(req.body.query)
    const data = await search.find(
        {
            $or: [{ title: { "$regex": query } }, { tags: { "$regex": query } }, { description: { "$regex": query } }]
        })
    res.send(data);
})

app.listen(3000)
console.log("listing")
