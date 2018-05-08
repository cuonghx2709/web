const mongoose = require('mongoose')

const Schema = mongoose.Schema

const scoreRow = new Schema({
    score: {
        "1" : {type: Number, default: 0},
        "2" : {type: Number, default: 0},
        "3" : {type: Number, default: 0},
        "4" : {type: Number, default: 0},
        
    },
    "row" : {type : Number, default: 0}
},{
    timestamps: true
})

const goalSchema = new Schema({
    player : {type: [String], default : []},
    score : {type : [scoreRow], default : []},

},{
    timestamps : true
})



module.exports = mongoose.model("score", goalSchema)