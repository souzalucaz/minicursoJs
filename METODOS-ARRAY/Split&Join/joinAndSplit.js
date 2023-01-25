const numeros = [5, 6, 7, 10];
const url = "https://Lucas.santos.com/";
const fimDeUrlComEspacos = "uma url nao aceita espacos apenas -";

const numerosComPonto = numeros.join("."); //transforma o array em uma string e o adiciona ponto '.' a cada posição
console.log(numerosComPonto)

const separaPorPonto = numerosComPonto.split("."); // transforma a String em um Array on cada ponto é uma posição

console.log(separaPorPonto);

const separaPorEspacos = fimDeUrlComEspacos.split(" ");

console.log(separaPorEspacos);

const adiconaTracos = separaPorEspacos.join("-");

console.log(url.concat(adiconaTracos));
