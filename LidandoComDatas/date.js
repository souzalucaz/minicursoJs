const data1 = new Date(); // Formato de data padrão
console.log(data1);

const data2 = new Date("March 06 2019 09:30");
console.log(data2);

const data3 = new Date(2023, 00, 04, 20, 51); //Ano / mês (0 = Janeiro) / o dia / Hora / Minutos | O dia da semana por extenso é obtido automaticamente de acordo com o ano no exemplo a cima se eu colocar 2022 o dia 04 é uma terça feira, 2023 é segunda feira
console.log(data3);

console.log(data3.toDateString()); // formato string
console.log(data3.toTimeString()); // horario em string

let novaData = data3.toDateString();
console.log(novaData);
console.log(novaData.replace("Wed Jan 04", "segunda 04 de Janeiro de")); // como transformei em uma string posso usar os métodos de string
