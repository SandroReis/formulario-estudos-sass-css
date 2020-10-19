export class Produto {
    constructor(
        public codigo: number,
        public descricao: string,
        public valor: number,
        public disconto: number,
    ) {}
}