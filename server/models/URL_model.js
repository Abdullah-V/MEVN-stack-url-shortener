const { Schema,model } = require("mongoose")

const URL_Schema = new Schema({
    originalURL:{
        type:String,
    },
});


const  URL_model = new model('URL_model',URL_Schema)

module.exports = URL_model

