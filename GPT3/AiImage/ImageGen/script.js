const bodyP = require("body-parser");
const express = require("express")
const app = express()
const openai = require("openai")
app.use(express.static('./'))
const configuration = new openai.Configuration({
    apiKey: "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",
});
const ai = new openai.OpenAIApi(configuration);
app.use(bodyP.json());
app.get("/", function (req, res) {
    res.sendFile("E:/websitesallprojects/GPT3/AiImage/ImageGen/index.html")
})
app.post("/getImage", async function (req, res) {
    const response = await ai.createImage({
        prompt: req.body.name,
        n: 1,
        size: req.body.size,
    });
    image_url = response.data.data[0].url;
    res.status(200).json({ link: image_url })
})
app.listen(3000)