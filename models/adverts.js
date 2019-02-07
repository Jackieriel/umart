const mongoose = require("mongoose");

// create structure for user schema
let advertsSchema = mongoose.Schema({
    category: {
        type: String,
        required: "This field is required."
    },
    title: {
        type: String,
        required: "This field is required."
    },
    price:{
        type: String,
        required: "This field is required."
    },
    zone: {
        type: String,
        required: "This field is required."
    },
    description: {
        type: String,
        required: "This field is required."
    }
});

// Register schema
module.exports = mongoose.model("Adverts", advertsSchema);

// let Adverts = module.exports = mongoose.model('Adverts', adverts)
