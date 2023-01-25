//Criar um objeto que vai conter as seguintes porpriedades:
//FUNCAO CONSTRUTORA
/** Objeto Postagem:
 * titulo
 * mensagem
 * autor
 * visualizações
 * comentários será um array de objetos com (autor,mensagem)
 * está o vivo ou não
 */

function Postagem(
  titulo,
  autor,
  visualizacoes,
  mensagem,

  comentarios,
  estaAoVivo
) {
  (this.titulo = titulo),
    (this.autor = autor),
    (this.visualizacoes = visualizacoes),
    (this.mensagem = mensagem),
    (this.comentarios = comentarios),
    (this.estaAoVivo = estaAoVivo);
}

const novoPost = new Postagem(
  "Watchmen",
  "Zack Snyder",
  78945,
  "Who watch the watches?",
  (comentarios = { autor: "Lucas", mensagem: "Excelente Filme" }),
  true
);

console.log(novoPost);
