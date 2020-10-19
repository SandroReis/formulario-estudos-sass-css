import { NotaFiscalService } from './services/nota-fiscal.service';
import { ProdutoService } from './services/produto.service';
import { Produto } from './models/produto.model';
import { NotaFiscal } from './models/nota-fiscal.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  produtos: Produto[]

  constructor(private produtoService: ProdutoService, private notaFiscalService: NotaFiscalService) { }

  ngOnInit(): void {
    this.produtoService.read().subscribe(produto => this.produtos = produto)
    console.log('this.produtos', this.produtos)
  }

  title = 'gerador de nota fiscal'
  confirm_msg = ''
  nomeClienteTabela = ''

  nomeCliente: string
  produtoComprado: Produto
  quantidade: number

  listaProdutosComprados = []
  listaQuantidade = []

  tabela = []

  totalItem: number
  totalFinal: number = 0


  incluirItem() {
    if (this.quantidade > 0) {
      this.listaProdutosComprados.push(this.produtoComprado)
      this.listaQuantidade.push(this.quantidade)
      this.totalItem = parseFloat(((this.produtoComprado.valor - (this.produtoComprado.valor * (this.produtoComprado.disconto / 100))) * this.quantidade).toFixed(2))
      this.tabela.push({
        qtd: this.quantidade,
        produto: this.produtoComprado,
        totalItem: this.totalItem
      })
      this.totalFinal += this.totalItem
    }
    else {
      alert('quantidade invalida')
    }
    this.produtoComprado = null
    this.quantidade = null
  }

  fecharNota() {
    this.notaFiscalService.create(new NotaFiscal(this.nomeCliente, this.listaProdutosComprados)).subscribe(() => {
      this.listaProdutosComprados = []
      this.listaQuantidade = []
      this.confirm_msg = 'R$' + this.totalFinal.toFixed(2)
      this.nomeClienteTabela = 'Cliente ' + this.nomeCliente
      this.nomeCliente = ''
    })
  }

  novaNota() {
    this.listaProdutosComprados = []
    this.listaQuantidade = []
    this.confirm_msg = ''
    this.nomeClienteTabela = ''
    this.nomeCliente = ''
    this.produtoComprado = null
    this.quantidade = null
    this.tabela = []
    this.totalFinal = 0
  }

}
