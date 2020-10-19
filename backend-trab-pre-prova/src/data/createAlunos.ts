import { Aluno } from "../presentation/Aluno"
import { CreateAluno } from '../protocols'

export default function createMultiplesAlunos(alunos: CreateAluno[]): Aluno[] {
	const as: Aluno[] = []

	alunos.forEach((a) => {
		as.push(new Aluno(a))
	})
	return as
}
