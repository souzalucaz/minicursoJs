/** Criar um array de objetos de faixa de preço para que possa ser usado em um site de compras */

function Produto(nome, preco) {
  (this.nome = nome), (this.preco = preco);
}

let itensEstoque = criaProdutos();

function criaProdutos() {
  const produtos = [
    { produto01: new Produto("smart watch", 320) },
    { produto02: new Produto("Cadeira Gamer", 873) },
    { produto03: new Produto("Smartphone", 1650) },
  ];
  console.log(produtos[0].produto01.preco);
  return produtos;
}

function exibeProdutoPorFaixaPreco(valorProduto) {
  if (valorProduto <= 500) {
    return itensEstoque[0];
  } else if (valorProduto > 500 && valorProduto <= 1000) {
    return itensEstoque[1];
  } else {
    return itensEstoque[2];
  }
}
console.log(exibeProdutoPorFaixaPreco(500));
