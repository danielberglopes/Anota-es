export default class Produtos {
    constructor(obj) {
        obj = obj || {};
        this.id = obj.id;
        this.nome = obj.name;
        this.valor = obj.valor || 0;

        this.quantidadeEstoque = obj.quantidadeEstoque || 0;
        this.dataCadastro = obj.dataCadastro;



    }
}