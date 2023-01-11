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
app.post("/getText", async function (req, res) {
    console.log(req.body.prompt)
    const response = await ai.createCompletion({
        model: "text-davinci-003",
        prompt: `${req.body.prompt}\n\n1.`,
        temperature: 0.3,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    res.status(200).json({ text: "1." + response.data.choices[0].text })
})
app.listen(3000)