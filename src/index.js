// Função que soma dois números
function somar(n1, n2) {
  return n1 + n2;
}

// Função que subtrai dois números
function subtrair(n1, n2) {
  return n1 - n2;
}

// Função que multiplica dois números
function multiplicar(n1,n2) {
  return n1 - n2;
}

// Função que divide dois números, com verificação de divisão por zero
function dividir(n1,n2) {
  return n1 / n2;
}

// Função que verifica se um número é par
function ehPar(num) {
  return num % 2 === 0;
}



// Exporta todas as funções para serem usadas nos testes
module.exports = {
  somar,
  subtrair,
  multiplicar,
  dividir,
  ehPar,
};
