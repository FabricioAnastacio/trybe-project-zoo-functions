// const { TestScheduler } = require('jest');
const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se handlerElephants é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('Testa se a o retorno é undefined caso nenhum parametro seja passado', () => {
    expect(handlerElephants()).toEqual(undefined);
  });
  it('Caso o parametro não seja uma string o retorno devera ser "Parâmetro inválido, é necessário uma string"', () => {
    expect(handlerElephants(true)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Verifica se o retorno é um array de strings caso passe "availability" como parametro', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Verifica se a função retorna a media de idade dos elefantes residentes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('Verifica se a função retorna os nomes dos elefantes residentes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Verifica se a função retorna a qunatidade de elefantes residentes', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('Verifica se o retorno é null caso o parametro não seja o esperado', () => {
    expect(handlerElephants('Count')).toEqual(null);
  });
});
describe('Testado retornos da função handlerElephants', () => {
  
});
