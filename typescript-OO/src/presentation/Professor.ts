import { CreateProfessor } from "../protocols"
import { ProfessorModel } from "../protocols/classesProtocols"
import { Pessoa } from "./Pessoa"

export class Professor extends Pessoa implements ProfessorModel {
	private categoria: string

	constructor(data: CreateProfessor) {
		super(data)
		this.categoria = data.categoria
	}

	getCategoria() {
		return this.categoria
	}
}
