const mongoose  = require('mongoose')

// Here is the table for plantees

const planteesSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    fromUSA:{
        type: Boolean,
    },
    born:{
        type: Number
    },
    bio:{
        type: String
    },
    quote:{
        type: String 
    },
    pitureUrl:{
        type: String
    },
    twitter:{
        type: String
    }
})

// Export the schema
// mongoose.model takes two argument, first will be the name of the model, second is the schema.

module.exports = mongoose.model('Plantee', planteesSchema)