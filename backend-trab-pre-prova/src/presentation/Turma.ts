import { Aluno, Disciplina, Professor } from "../presentation"
import { CreateTurma } from "../protocols"
import { TurmaModel } from "../protocols/classesProtocols"

export class Turma implements TurmaModel{
	private professor: Professor
	private disciplina: Disciplina
	private aluno: Aluno[]

	constructor({ professor, disciplina, aluno }: CreateTurma) {
		this.professor = professor
		this.disciplina = disciplina
		this.aluno = aluno
	}

	getTurmaInfo() {
		return {
			professor: this.professor,
			disciplina: this.disciplina,
			aluno: this.aluno,
		}
	}
}
