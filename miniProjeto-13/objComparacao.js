/*Criar 2 objetos e comparar em uma função x se suas propriedades são iguais e funcao y se */

function Endereco(rua, numero, cidade, cep) {
  (this.rua = rua),
    (this.numero = numero),
    (this.cidade = cidade),
    (this.cep = cep);
}

const endereco01 = new Endereco("a", "b", "c", "d");
const endereco02 = new Endereco("a", "b", "q", "d");

function saoIguais(endereco01, endereco02) {
  let propriedades1 = '';
  let propriedades2 = '';
  for (let chave in endereco01) {
    propriedades1 += (endereco01[chave]);
  }
  
  for (let key in endereco02) {
    propriedades2 += (endereco02[key]);
  }
  console.log(propriedades1 == propriedades2);
}
saoIguais(endereco01, endereco02);
// A maneira mais simples seria comparar propriedade por propriedade 
function comparaProp(endereco01, endereco02) {

  console.log(endereco01.rua == endereco02.rua && endereco01.numero == endereco02.numero && endereco01.cidade == endereco02.cidade && endereco01.cep == endereco02.cep)
}
comparaProp(endereco01, endereco02);