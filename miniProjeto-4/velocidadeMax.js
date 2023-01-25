// Velocidade máxima 70km
// a cada 5km acima do limite o motorista ganha 1 ponto
// caso a quantidade de pontos for maior que 12 a carteira é suspensa

verificaVelocidadeMaxima(71);

function verificaVelocidadeMaxima(velocidade) {
  let velocidadeMaximaPermitida = 70;
  let pontuacaoLimite = 12;
  if (velocidade <= velocidadeMaximaPermitida) {
    console.log("ok");
  } else {
    let pontos = Math.floor((velocidade - velocidadeMaximaPermitida) / 5);
    if (velocidade > velocidadeMaximaPermitida && pontos == 0) {
      pontos = 1;
    }

    if (pontos < pontuacaoLimite) {
      console.log(
        `Velocidade acima do permitido você  perdeu  ${pontos} pontos`
      );
    } else {
      console.log("Você recebeu mais de 12 pontos, carteira suspensa");
    }
  }
}
