//Funções de  Arrays

// Adicionando novos elementos

const numeros = [1, 2, 3];

numeros.push(4, 8, 12); // Adiciona item na ultima posição do array

console.log(numeros);

numeros.unshift(7); // Adiciona item na primeira posição do array

console.log(numeros);

numeros.splice(4, 0, "a"); // O splice usa 3 parâmetros onde o item que quero adicionar vai ser inserido(nesse caso no indice 4) o que eu quero deletar(nesse caso, nada), e o que eu quero inserir, (a letra A)
console.log(numeros);

const array = [1, 2, 3];

const newArray = [];

for (let key in array) {
  console.log(array[key], key);
  if (array[key] == 2) {
    newArray.push(array[key]);
  }
}
console.log(newArray);

const newArray2 = [];

array.forEach((elementosDoArray) => {
  console.log(elementosDoArray);
  if(elementosDoArray == 3){
    newArray2.push(elementosDoArray,'certo');
  }
 
});
console.log(newArray2);
