import { DisciplinaModel } from "../protocols/classesProtocols";

export class Disciplina implements DisciplinaModel{
  private nome: string;

  constructor(nome) {
    this.nome = nome;
  }

  getNome() {
    return this.nome;
  }
}
