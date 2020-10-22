import { Disciplina } from './disciplinaModel';
import { Aluno } from './alunoModel';

export class Turma {
    constructor(
        public codigo: number,
        public discipTurma: Disciplina,
        public listaAlunos: Aluno[]
    ) {}
}