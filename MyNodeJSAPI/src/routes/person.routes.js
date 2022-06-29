const PersonControler = require('../controllers/person.controller')
const express = require('express')
const router = express.Router()

router.get('/', PersonControler.index)
router.get('/:id', PersonControler.show)
router.put('/:id', PersonControler.update)
router.post('/', PersonControler.store)
router.delete('/:id', PersonControler.destroy)

module.exports = router