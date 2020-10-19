import { CreateTurma } from "./createProtocols";

export interface TurmaModel {
  getTurmaInfo(): CreateTurma
}

export interface ProfessorModel {
  getCategoria(): string
}

export interface PessoaModel {
  getNome(): string

  getDataNasc(): Date
  
	getGenero(): string
}

export interface DisciplinaModel {
  getNome(): string
}