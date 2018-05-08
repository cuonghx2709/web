const goalModel = require('./model')

const createGame = ({ player, score }) => new Promise((resolve, reject) => {
    // console.log(player)
    // console.log(score)
    goalModel.create({
        player,
        score: {
            "1": 0,
            "2": 0,
            "3": 0,
            "4": 0
        }
    }).then(data => {
        resolve(data)
    }).catch(err => reject(err))
})

const createRow = (id, row) => new Promise((resolve, reject) => {
    goalModel.update({
        _id: id
    }, {
            $push: {
                score: {
                    score: {
                        "1": 0,
                        "2": 0,
                        "3": 0,
                        "4": 0
                    },
                    row
                }
            }
        }).then(data => resolve(data)).catch(err => reject(data))
})

const getGameById = (id) => new Promise((resolve, reject) => {
    goalModel.findOne({ _id: id }).select("player score ").exec().then(data => resolve(data)).catch(err => reject(err))
})

const updateValue = (id, { row, index, value }) => new Promise((resolve, reject) => {
    console.log(row + " : " + index + ": " + value)
    console.log(id)
    switch (index) {
        case 0:
            goalModel.update({
                _id: id,
                "score.row": row
            }, {
                    $set: { "score.$.score.1": value }
                }).then(data => resolve(data)).catch(err => reject(data))
            break;
        case 1:
            goalModel.update({
                _id: id,
                "score.row": row
            }, {
                    $set: { "score.$.score.2": value }
                }).then(data => resolve(data)).catch(err => reject(data))
            break;
        case 2:
            goalModel.update({
                _id: id,
                "score.row": row
            }, {
                    $set: { "score.$.score.3": value }
                }).then(data => resolve(data)).catch(err => reject(data))
            break;
        case 3:
            goalModel.update({
                _id: id,
                "score.row": row
            }, {
                    $set: { "score.$.score.4": value }
                }).then(data => resolve(data)).catch(err => reject(data))
            break

        default:
            break;
    }


})

module.exports = {
    createGame,
    createRow,
    getGameById,
    updateValue

}

