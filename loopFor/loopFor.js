for (let i = 1; i <= 7; i++) {
  if (i % 2 != 0) {
    console.log(i, "é impar");
  }
}

//While a variável de indice deve ser criada fora do loop

let i = 10;

while (i >= 1) {
  if (i % 2 == 0) {
    console.log(i, "é par");
  }

  i--;
}
// Do While semelhante ao while mas executa no mínimo 1 vez

i = 5;

do{
    console.log(i,'estou aprendendo!')
    i--
}while(i>=1){

}