const express = require('express');
const app = express();
const { connectMongo, search } = require("./Mongo")
const bodyP = require("body-parser")
connectMongo();
app.use(bodyP.json());
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000'
}));
// app.get('/', function (req, res) {
//     res.sendFile('E:/websitesallprojects/YtSearchAlgo/index.html');
// })
// app.get('/upload', function (req, res) {
//     res.sendFile('E:/websitesallprojects/YtSearchAlgo/Upload.html');
// })
app.post('/getVid', async function (req, res) {
    const query = req.body.keyword
    console.log(req.body.query, "ajfghb")
    const data = await search.find(
        {
            $or: [{ title: { "$regex": query } }, { tags: { "$regex": query } }, { description: { "$regex": query } }]
        })
    res.send(data);
})
app.post("/add", function (req, res) {

    const data = new search(req.body)
    data.save()
    console.log(data)
    res.send("ok")
})
app.listen(8000)
console.log("listing")
