var letTeste = "Lucas";
var varTeste = "Souza";
const constanteTeste = 27;
var variavelTeste = "anos";
console.log(varTeste, constanteTeste, variavelTeste);

//Diferença entre let e var está no  escopo de bloco.

if (typeof varTeste == "string") {
  var testeVAR = "VAR apareceu em outro escopo";
}

function escopoBlocoVar() {
  console.log(testeVAR);
}

if (typeof letTeste == "string") {
  let testeLET = "LET apareceu em outro escopo";
}

function escopoBlocoLet() {
 try {
    console.log(testeLET)
 } catch (error) {
    console.log(' ERRO! LET não aparece em outro escopo')
 }
}

escopoBlocoVar();
escopoBlocoLet();
//com o let a variável declarada dentro do if existe somente dentro do if. No caso do var ela transpassa esse limite e pode ser usada dentro de outros escopos, o que não é uma boa prática.


//Tipos Primitivos- Temos as referencias e os valores