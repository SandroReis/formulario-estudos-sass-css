import { Turma } from "../presentation/Turma"
import { CreateTurma } from '../protocols/'

export default function createTurma(data: CreateTurma): Turma {
	const t: Turma = new Turma(data)

	return t
}
