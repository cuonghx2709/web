const express = require('express')
const controller = require('./controller')

const router = express.Router()

router.post("/" ,(req, res) => {
    controller.createGame(req.body)
    .then(data => {
        console.log(data._id)
        res.send({id: data._id})
    })
    .catch(err => {
        console.log(err)
        res.status(400).send(err)
    })
})

router.get('/:id', (req, res)=> {
    controller.getGameById(req.params.id).then(data => res.send(data)).catch(err => {
        console.log(err)
        res.status(400).send(err)
    })
})

router.post("/:id/addrow", (req, res) => {
    controller.createRow(req.params.id, req.body.row).then(data => res.send(data)).catch(err => {
        console.log(err)
        res.status(400).send(err)
    })
})

router.post('/:id/row', (req, res) => {
    controller.updateValue(req.params.id,req.body).then(data => res.send(data))
    .catch(err => {
        console.log(err)
        res.status(400).send(err)
    })
})

module.exports = router