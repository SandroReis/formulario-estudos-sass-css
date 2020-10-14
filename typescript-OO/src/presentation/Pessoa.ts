import { CreatePessoa } from "../protocols"
import { PessoaModel } from "../protocols/classesProtocols"

export class Pessoa implements PessoaModel {
	private nome: string
	private dataNasc: Date
	private genero: string

	constructor(data: CreatePessoa) {
		this.nome = data.nome
		this.dataNasc = data.dataNasc
		this.genero = data.genero
	}

	getNome() {
		return this.nome
	}
	getDataNasc() {
		return this.dataNasc
	}
	getGenero() {
		return this.genero
	}
}
