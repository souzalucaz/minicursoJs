// Criar um método para ler propriedades de um objetoeto
// exibit somente as propriedades do tipo string

const filme = {
  Titulo: "Watchmen",
  Diretor: "Zack Snyder",
  Ano: 2009,
  Bilheteria: 185.4,
};

exibeString(filme);

function exibeString(objeto) {
  for (const chave in objeto) {
    if (typeof objeto[chave] == "string") {
      console.log(chave, objeto[chave]);
    }
  }
}

