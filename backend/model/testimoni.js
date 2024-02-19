var mongoose = require('mongoose');

var schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    statement: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }  
});

var testimony = new mongoose.model('testimoni', schema);

module.exports = testimony;