const express = require("express")
const { env } = require('node:process');
const v = require("dotenv").config()
console.log(process)
const app = express()
const bodyP = require("body-parser")
app.use(bodyP.json());

app.get("/", function (req, res) {
    res.sendFile("E:/websitesallprojects/GPT3/chatGpt/index.html")
})
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
console.log(process.env.OPENAI_API_KEY)
const openai = new OpenAIApi(configuration);
app.post("/talk", async function (req, res) {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: req.body.prompt,
        temperature: 0.9,
        max_tokens: 150,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0.6,
        stop: [" Human:", " AI:"],
    });
    res.status(200).json({ response: response.data.choices[0].text })
    console.log(response.data.choices[0].text)
})

app.listen(3000)