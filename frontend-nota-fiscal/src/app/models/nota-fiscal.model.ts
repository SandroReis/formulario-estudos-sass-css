import { Produto } from './produto.model';

export class NotaFiscal {
    constructor(
        public cliente: string,
        public produtos: Array<Produto>
    ) {}
}