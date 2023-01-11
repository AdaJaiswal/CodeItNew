const mongoose = require("mongoose")
const connectToMongo = () => {
    mongoose.connect("mongodb://localhost:27017/searching", {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("connected to mongo")
    }).catch((e) => {
        console.log("not connected")
    })
}
const { Schema } = mongoose
const searchSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    thumbnail: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    tags: {
        type: String,
        require: true
    },
    video: {
        type: String,
        require: true
    }
})
const search = new mongoose.model("notes", searchSchema)
module.exports = { connectToMongo, search }