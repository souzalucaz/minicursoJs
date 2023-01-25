/*Criar um objeto Pessoa que contém
-Nome
-Sexo
-Idade
e uma função que  se pessoa for do sexo Masculino e tiver 18 anos  exibe comparecer a junta militar*/

function Pessoa(nome, sexo, idade) {
  (this.nome = nome),
    (this.sexo = sexo),
    (this.idade = idade),
    (this.obgMilitar = function () {
      if (this.sexo == "M" && this.idade == 18) {
        return "Comparecer a junta militar";
      } else if (this.sexo == "F") {
        return("não é necessário ir a junta militar");
      } else {
        return("Dispensa ja expedida");
      }
    });
}

const pessoa1 = new Pessoa("Lucas", "M", 28);

console.log(pessoa1.obgMilitar());
