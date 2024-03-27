
const dadosEstudante = require('./dadosEstudante');

describe('Teste da função recebeDados', () => {
  test('Verifica se a função processa corretamente o nome "Yolanda Proensa" e o RA "191648"', () => {
    const nome = "Yolanda Proensa";
    const RA = "191648";
    const esperado = `Dados recebidos - Nome: ${nome}, RA: ${RA}`;

    expect(dadosEstudante(nome, RA)).toBe(esperado);
  });
});
