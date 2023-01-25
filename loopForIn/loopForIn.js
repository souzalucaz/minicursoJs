// for in é utilizado para iterar sobre arrays e objetos mais apropriado para objetos

const pessoa = {
  nome: "lucas",
  idade: 25,
};

for (chave in pessoa) {
  console.log(chave);
}

const emprego = ["lucas", 25, "Souza"];

for (key in emprego) {
  console.log(key, emprego[key]);
}
