var express = require('express');
var router = express.Router();

const AlunoService = require("../services/aluno.service")

router.get('/list', (request, response) => {
	response.json(AlunoService.list())
})

module.exports = router
