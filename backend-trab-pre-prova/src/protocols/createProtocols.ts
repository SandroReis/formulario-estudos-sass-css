import { Aluno, Disciplina, Professor } from "../presentation";

export interface CreatePessoa {
  nome: string;
  dataNasc: Date;
  genero: string;
}

export interface CreateProfessor {
  nome: string;
  dataNasc: Date;
  genero: string;
  categoria: string;
}

export interface CreateAluno {
  nome: string;
  dataNasc: Date;
  genero: string;
}

export interface CreateTurma {
	professor: Professor
	disciplina: Disciplina
	aluno: Aluno[]
}
