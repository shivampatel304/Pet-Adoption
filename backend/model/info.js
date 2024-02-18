var mongoose = require('mongoose');

var schema = mongoose.Schema({
    identity: {
        type: {
            petType: {
                type: String,
                required: true
            },
            breed: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            }
        },
        required: true
    },
    address: {
        type: {
            location: {
                type: String,
                required: true
            },
            zipcode: {
                type: String,
                required: true,
                validate: {
                    validator: function (value){
                        const regex = /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/;
                        return regex.test(value);
                    },
                    message: props => `${props.value} is not a valid Canadian postal code!`
                }
            }
        },
        required: true
    },
    petInformation: {
        type: {
            coatLength: {
                type: Number,
                required: true
            },
            characteristics: [String],
            trained: String,
            health: {
                type: [String],
                required: true
            },
            preferences: String
        },
        required: true
    },
    image: String,
    adoptionCost: Number,
    about: String,

});

var info = new mongoose.model('info', schema);

module.exports = info;