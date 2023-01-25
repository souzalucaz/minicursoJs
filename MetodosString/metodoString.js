//String em javaScript possui alguns métodos prontos para manipular string, seguem alguns dos mais usados

let mensagem = "Minha primeira mensagem";

console.log(mensagem.length);
//Mostra a quantidade de caracteres do string(inclui espaços)

console.log(mensagem[0]); // posso acessar os caracteres pelos indice

console.log(mensagem.includes("a")); // verifica se a string inclui a sentença informada

console.log(mensagem.startsWith("Minhas")); //verifica se o string inicia com a sentença informa

console.log(mensagem.endsWith("mensag")); //Verifica se o string terminha com a sentença informada

console.log(mensagem.indexOf("primeiras")); // Acessa o indice da sentença informada

console.log(mensagem.replace("primeira", "segunda")); // substitui a string por outra

console.log(mensagem.trim()); // remove espaços excedentes no inicio ou no final da string

console.log(mensagem.split(" ")); // separa a palavra por item especificado, por exemplo espaços, na frase 'minha primeira mensagem' teremos como resultado no console um array de 3 posições
