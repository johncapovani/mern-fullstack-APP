const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({

text: {
    type: String,
    required: [true, 'Please add a text value']
}
},
//Add timestamp
{
//This creates a created at time automatically for the documents
timestamps: true,
}
)

//Export the data model for the goals
module.exports = mongoose.model('Goal', goalSchema)