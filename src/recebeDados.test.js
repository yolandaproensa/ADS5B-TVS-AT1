
const dadosEstudante = require('./dadosEstudante');

describe('Teste da função recebeDados', () => {
  test('Verifica se a função processa corretamente o nome "Mellinda Gates" e o RA "228697"', () => {
    const nome = "Mellinda Gates";
    const RA = "228697";
    const esperado = `Dados recebidos - Nome: ${nome}, RA: ${RA}`;


    expect(dadosEstudante(nome, RA)).toBe(esperado);
  });
});
