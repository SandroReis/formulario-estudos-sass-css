import createTurma from '../data/createTurma'
import { Professor, Disciplina } from '../presentation/'
import createMultiplesAlunos from '../data/createAlunos'

function main() {
	const response = createTurma({
		professor: new Professor({
			nome: 'Profa. Latrel',
			dataNasc: new Date(1995, 11, 17),
			genero: 'M',
			categoria: 'Matemática',
		}),
		disciplina: new Disciplina('Desenvolvimento WEB'),
		aluno: createMultiplesAlunos([
			{
				nome: 'Sandro',
				dataNasc: new Date(1994, 3, 20),
				genero: 'M',
			},
			{
				nome: 'Dani',
				dataNasc: new Date(1997, 4, 18),
				genero: 'F',
			},
		]),
	})
	console.log(response)
}

main()
