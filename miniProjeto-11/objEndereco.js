/*Criar um objeto endereço que contém
-Rua
-Cidade
-CEP
e uma função que exibe o endereço*/

const endereço = {
  rua: "Consolação",
  numero: 134,
  cep: "30580-420",
  cidade: "Belo Horizonte",
};
function exibeEndereco(objeto) {
  let teste = {};
  for (let chave in objeto) {
    teste += `${chave}:${endereço[chave]} `;
    // console.log(teste);
  }
  console.log(teste);
}
exibeEndereco(endereço);
