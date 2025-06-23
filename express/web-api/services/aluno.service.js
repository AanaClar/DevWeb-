const alunos = require("../data/alunos");

class AlunoService {
	static list() {
		return alunos;
	}
}

module.exports = AlunoService;
