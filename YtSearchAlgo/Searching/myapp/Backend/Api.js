const express = require("express")
const app = express()
const { connectToMongo, search } = require("./Mongo")
const bodyP = require("body-parser")
connectToMongo()
app.use(bodyP.json());
const cors = require("cors")
app.use(cors({
    origin: "http://localhost:3000"
}))
app.post("/add", function (req, res) {
    const data = new search(req.body)
    data.save()
    console.log(req.body)
    res.send("ok")
})






app.post("/getVid", async function (req, res) {
    const data = await search.find({
        title: { "$regex": "java" }
    })
    res.send(data)
})














app.listen(8000)
console.log("listing")