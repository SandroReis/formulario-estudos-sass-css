import { CreateAluno } from "../protocols";
import { Pessoa } from "./Pessoa";

export class Aluno extends Pessoa {
	constructor(data: CreateAluno) {
		super(data)
	}
}
