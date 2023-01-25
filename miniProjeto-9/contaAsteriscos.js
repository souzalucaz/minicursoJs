//Criar uma função que exibe a quantidade de *

// let asterisco = "";

// function adicionaAsterisco1Loop(limite) {
//   for (let i = 1; i <= limite; i++) {
//     asterisco += "*";
//     console.log(asterisco);
//   }
// }

function adicionaAsterisco(limite) {
  for (let linha = 1; linha <= limite; linha++) {
    let asterisco = " "; //cria variável para saltar linhas

    for (let i = 0; i < linha; i++) {
      asterisco += "*"; // adiciona asteriscos nas linhas
    }
    console.log(asterisco);
  }
}

adicionaAsterisco(10);
//adicionaAsterisco1Loop(10)
