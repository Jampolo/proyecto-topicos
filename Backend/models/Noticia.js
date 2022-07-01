const mongoose = require("mongoose");

const NewsSchema =mongoose.Schema({
    titulo: {
        type: String,
        require: true
    },
    cuerpo: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("News", NewsSchema);