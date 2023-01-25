//tipos primitivos de referencia são objetos arrays e functions

//Objetos:

let pessoa = {
  nome: "Lucas",
  idade: 27,
  maiorIdade: true,
  sobreNome: "de Souza",
};
let emprego = {
  cargo: "Analista",
  salario: 1500,
};

console.log(pessoa.maiorIdade);

//Arrays:

let pessoaEmprego = [{ pessoa }, { emprego }];
console.log(pessoaEmprego[1],pessoaEmprego[0])

//Funções:

function imprimeNomeCargo() {
  return pessoaEmprego[0].pessoa.nome + " - " + pessoaEmprego[1].emprego.cargo;
}

console.log(imprimeNomeCargo());

let corSite = "cor do site: Azul";

function resetaCorSite() {
  corSite = "cor do site reiniciada"; // alterei o valor da variável via função
}
console.log(corSite);
resetaCorSite();
console.log(corSite);

function somaValores(item1, item2) {
  let soma = item1 + item2;
  if (typeof item1 == "string" || typeof item2 == "string") {
    soma = item1 + " " + item2;
    return soma;
  } else {
    return soma;
  }
}
console.log(somaValores("joao", "gomes"));
console.log(somaValores(10, 20));
