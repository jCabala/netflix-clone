const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true,
    },
    photoLink : {
        type: String,
        required: true,
    },
    movieLink : {
        type: String,
        required: true
    }  
})

module.exports = Movie = mongoose.model('Movie', MovieSchema)