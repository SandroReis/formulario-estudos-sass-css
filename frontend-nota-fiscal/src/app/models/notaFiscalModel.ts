import { Produto } from './produtoModel';

export class NotaFiscal {
    constructor(
        public cliente: string,
        public produtos: Array<Produto>
    ) {}
}