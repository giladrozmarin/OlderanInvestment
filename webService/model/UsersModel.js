const mongoose = require ('mongoose')
const Schema = mongoose.Schema

let UsersSchema = new Schema ({
   Nickname: { type: String, required: true, index: { unique: true } },
   Username: { type: String, required: true, index: { unique: true } },
   Password: { type: String, required: true },
   Create_time: {type: Date, required: true },
   Status:{
    type: [{
        type: Number,
        enum: [0, 1]
    }],
    default: [0]
} ,
   roles: {
    type: [{
        type: String,
        enum: ['USER', 'ADMIN']
    }],
    default: ['USER']
}
}) 

module.exports = mongoose.model('Users', UsersSchema )
