//Obter média a partir de um array
// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const notas = [90, 80, 70];

function calculaMedia(array) {
  let media = 0;
  for (nota of array) {
    media += nota;
  }
  media = media / array.length;
  return imprimeResultado(media.toFixed(2));
}

calculaMedia(notas);

function imprimeResultado(media) {
  if (media <= 59) {
    return console.log(`Nota: ${media}, conceito F`);
  }
  if (media <= 69) {
    return console.log(`Nota: ${media}, conceito D`);
  }
  if (media <= 79) {
    return console.log(`Nota: ${media}, conceito C`);
  }
  if (media <= 89) {
    return console.log(`Nota: ${media}, conceito B`);
  } else {
    return console.log(`Nota: ${media}, conceito A`);
  }
}
