const express = require("express")
const app = express()
const openai = require("openai")
const bodyP = require("body-parser")
app.use(bodyP.json())
app.use(express.static("./"))
app.get("/", function (req, res) {
    res.sendFile("E:/websitesallprojects/AI_img/index.html")
})

const configuration = new openai.Configuration({
    apiKey: "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"
})

const ai = new openai.OpenAIApi(configuration)

app.post("/getImage", async function (req, res) {
    const response = await ai.createImage({
        prompt: req.body.name,
        n: 1,
        size: req.body.size
    })
    image_url = response.data.data[0].url
    res.status(200).json({ link: image_url })
})




app.listen(3000)