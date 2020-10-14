import { Professor } from "../presentation/Professor"
import { CreateProfessor } from '../protocols'

export default function createMultiplesProfessores(
	professores: CreateProfessor[]
): Professor[] {
	const ps: Professor[] = []
	professores.forEach((p) => {
		ps.push(new Professor(p))
	})
	return ps
}
