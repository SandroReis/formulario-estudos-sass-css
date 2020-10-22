import { Disciplina } from './models/disciplinaModel';
import { Component } from '@angular/core';
import { Turma } from "./models/turmaModel";
import { Aluno } from "./models/alunoModel";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  disciplinas: Disciplina[] = [
    {
      codigo: 420,
      nome: 'Programação Orientada a Objetos'
    },
    {
      codigo: 120,
      nome: 'Arquitetura de Softwares'
    },
    {
      codigo: 220,
      nome: 'WEB'
    }
  ]
  alunos: Aluno[] = [
    {
      nroMatric: 110,
      nome: 'Sandro'
    },
    {
      nroMatric: 120,
      nome: 'João'
    },
    {
      nroMatric: 220,
      nome: 'Dany'
    },
    {
      nroMatric: 320,
      nome: 'Seu Jorge'
    },
    {
      nroMatric: 520,
      nome: 'Alcione'
    },
    {
      nroMatric: 820,
      nome: 'Tim Maia'
    },
    {
      nroMatric: 920,
      nome: 'Manuel'
    },
    {
      nroMatric: 2120,
      nome: 'Jô'
    }
  ]

  turmas = []

  title = 'Cria turmas'
  confirm_msg = ''

  codigoDisciplina: number
  disciplinaSelecionado: Disciplina
  alunoSelecionado: Aluno
  quantidade: number
  consultaTurma: number
  turmaConsultada = {
    codigo: '',
    discipTurma: {
      codigo: '',
      nome: '',
    },
    listaAlunos: []
  }

  listaAlunos = []
  listaQuantidade = []

  tabela = []
  tabelaAlunosDisciplina

  totalItem: number
  totalFinal: number = 0


  incluirItem() {
    if(this.listaAlunos.includes(this.alunoSelecionado)){
      alert('Aluno já matriculado')
    }else{
      this.listaAlunos.push(this.alunoSelecionado)
    }
  }

  consultarTumarSelecionada(){
    const isvalid = this.turmas.filter(element => element.codigo === this.consultaTurma)
    if (!isvalid || !isvalid.length){
      alert('Turma não encontrada')
    } else {
      this.turmaConsultada = isvalid[0]
    }
  }

  fecharTurma() {
    this.turmas.push(new Turma(this.codigoDisciplina,this.disciplinaSelecionado,this.listaAlunos))
    this.codigoDisciplina = null
    this.disciplinaSelecionado = null
    this.listaAlunos = []
  }
}

