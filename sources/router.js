var express = require('express')
var carros = require('./carros/carros.controller.js')
var validate = require('./validate/validate.controller.js')
var path = require("path")

//

const router = express.Router()

router
	.route('/carros')
	.get(carros.getAll)
	.post(carros.create)

router
	.route('/carros/apagartudo')
	.get(carros.delAll)

router.param('id', validate.id)

router
	.route('/carros/:id')
	.get(carros.getOne)
	.put(carros.updFull)
	.patch(carros.updParcial)
	.delete(carros.del)

module.exports = router
