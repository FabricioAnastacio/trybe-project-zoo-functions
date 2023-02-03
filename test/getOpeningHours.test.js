const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testa se getOpeningHours é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  it('Veridica se ao chamar a função sem parametro retorna um objeto com os dias da semana e os horarios', () => {
    expect(getOpeningHours()).toEqual(
      {
        Tuesday: { open: 8, close: 6 },
        Wednesday: { open: 8, close: 6 },
        Thursday: { open: 10, close: 8 },
        Friday: { open: 10, close: 8 },
        Saturday: { open: 8, close: 10 },
        Sunday: { open: 8, close: 8 },
        Monday: { open: 0, close: 0 },
      },
    );
  });
  const closed = 'The zoo is closed';
  const open = 'The zoo is open';
  it('Verifica se ao passar "Monday" o retorno sera que o zoologico estara fechado', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe(closed);
  });
  it('Verifica se ao passar "Tuesday" o retorno sera que o zoologico estara aberto', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe(open);
  });
  it('Verifica se ao passar "Wednesday" com a hora "09:40-pm"o retorno sera que o zoologico estara fechado', () => {
    expect(getOpeningHours('Wednesday', '9:40-pm')).toBe(closed);
  });
  it('Caso o parametro seja de um dia letivo mas a hora seja fora do horario de funcionamento o retorno sera que o zoologico estara fechado', () => {
    expect(getOpeningHours('Friday', '12:00-am')).toBe(closed);
  });
  it('verifica se é laçado um erro caso a hora passada seja "XXX:XX-XM" com a mensagem "The hour must be between 0 and 12"', () => {
    expect(() => getOpeningHours('Friday', '123:00-pm')).toThrow(/^The hour must be between 0 and 12$/);
  });
  it('verifica se é laçado um erro caso a hora passada seja "XX:XXX-XM" com a mensagem "The minutes must be between 0 and 59"', () => {
    expect(() => getOpeningHours('Friday', '09:123-am')).toThrow(/^The minutes must be between 0 and 59$/);
  });
  it('verifica se é laçado um erro caso a hora passada não seja no padrão numerico, com a mensagem "The hour should represent a number"', () => {
    expect(() => getOpeningHours('Friday', 'C8:30-pm')).toThrow(/^The hour should represent a number$/);
  });
  it('verifica se é laçado um erro caso minuto passada não seja no padrão numerico, com a mensagem "The minutes should represent a number"', () => {
    expect(() => getOpeningHours('Friday', '08:3C-pm')).toThrow(/^The minutes should represent a number$/);
  });
  it('verifica se é laçado um erro caso o formato da hora não seja PM ou AM, com a mensagem "The abbreviation must be AM or PM"', () => {
    expect(() => getOpeningHours('Friday', '09:00-XX')).toThrow(/^The abbreviation must be 'AM' or 'PM'$/);
  });
  it('verifica se é laçado um erro caso o dia não seja exatamente um dia da semana e escrito coretamente em inglês, com a mensagem "The day must be valid. Example: Monday"', () => {
    expect(() => getOpeningHours('Sextouu', '09:00-am')).toThrow(/^The day must be valid. Example: Monday$/);
  });
});
