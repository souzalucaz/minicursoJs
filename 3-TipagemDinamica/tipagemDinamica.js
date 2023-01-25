//Tipagem dinâmica: O javascript descobre o tipo da variável em tempo de execução.

let nome = "Lucas"; //string literal
let idade = 27; //number literal
let maiorIdade = true; //boolean
let semValorDefinido; // valor padrão, Undefined
let setarValorInicialNulo = null; // Null

console.log(typeof idade);
idade = 25.3;
console.log(typeof idade);
idade = "deSouza";
console.log(typeof idade); //tipo da variável mudou sem se fazer necessário declarar explicitamente que agora ela é do tipo string
