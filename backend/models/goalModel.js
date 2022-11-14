const mongoose = require('mongoose')

//We need to add  a field of which user  created that specific goal


const goalSchema = mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
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