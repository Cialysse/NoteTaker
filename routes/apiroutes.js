
const router = require('express').Router()
const store = require('../db/store')

router.get('/', (req, res)=> {
    store
    .getnotes()
    .then((notes)=> {
        return res.json(notes)
    })


    .catch((err)=> res.status(500).json(err))
})