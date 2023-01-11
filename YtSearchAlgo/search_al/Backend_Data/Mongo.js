const mongoose = require('mongoose');
console.log(mongoose)
const { Schema } = mongoose;
const connectMongo = () => {
    mongoose.connect('mongodb://localhost:27017/shortner', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("connection is successfull");
    }).catch((e) => {
        console.log("not connected ");
    });
}
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
    },
});
const search = new mongoose.model('notes', searchSchema);
module.exports = { connectMongo, search }