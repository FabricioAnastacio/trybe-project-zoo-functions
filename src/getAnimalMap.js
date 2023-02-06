const data = require('../data/zoo_data');

function getAnimal(param) {
  const animais = [];
  data.species.forEach((specie) => {
    if (specie.location === param) {
      animais.push(specie.name);
    }
  });
  return animais;
}

function getAnimalName(param) {
  const animais = getAnimal(param);
  const result = [];
  let names = [];
  data.species.forEach((specie) => {
    names = [];
    if (animais.includes(specie.name)) {
      specie.residents.forEach((resident) => {
        names.push(resident.name);
      });
      result.push({
        [specie.name]: names,
      });
    }
  });

  return result;
}

function getAnimalNameOrder(param) {
  const animais = getAnimal(param);
  const result = [];
  let names = [];
  data.species.forEach((specie) => {
    names = [];
    if (animais.includes(specie.name)) {
      specie.residents.forEach((resident) => {
        names.push(resident.name);
      });
      result.push({
        [specie.name]: names.sort((a, b) => (a > b ? 1 : -1)),
      });
    }
  });

  return result;
}

function getAnimalGenre(região, sex) {
  const animais = getAnimal(região);
  const result = [];
  let names = [];
  data.species.forEach((specie) => {
    names = [];
    if (animais.includes(specie.name)) {
      specie.residents.forEach((resident) => {
        if (resident.sex === sex) {
          names.push(resident.name);
        }
      });
      result.push({
        [specie.name]: names,
      });
    }
  });
  return result;
}

function getAnimalGenreOrder(região, sex) {
  const animais = getAnimal(região);
  const result = [];
  let names = [];
  data.species.forEach((specie) => {
    names = [];
    if (animais.includes(specie.name)) {
      specie.residents.forEach((resident) => {
        if (resident.sex === sex) names.push(resident.name);
      });
      result.push({
        [specie.name]: names.sort(),
      });
    }
  });
  return result;
}

function getCheckGenre(param2) {
  const valores = Object.values(param2);
  const sexo = valores.find((valor) =>
    (valor === 'male' || valor === 'female'));
  if (valores.length <= 2) {
    return ({
      NE: getAnimalGenre('NE', sexo),
      NW: getAnimalGenre('NW', sexo),
      SE: getAnimalGenre('SE', sexo),
      SW: getAnimalGenre('SW', sexo),
    });
  }
  return ({
    NE: getAnimalGenreOrder('NE', sexo),
    NW: getAnimalGenreOrder('NW', sexo),
    SE: getAnimalGenreOrder('SE', sexo),
    SW: getAnimalGenreOrder('SW', sexo),
  });
}

function checkParam(param) {
  const key = Object.keys(param);
  if (key.includes('sex') && key.includes('includeNames')) return getCheckGenre(param);
  if (key.includes('includeNames')) {
    return ({
      NE: getAnimalName('NE'),
      NW: getAnimalName('NW'),
      SE: getAnimalName('SE'),
      SW: getAnimalName('SW'),
    });
  }
  if (!key.includes('includeNames')) {
    return ({
      NE: getAnimal('NE'),
      NW: getAnimal('NW'),
      SE: getAnimal('SE'),
      SW: getAnimal('SW'),
    });
  }
}

function getAni() {
  return ({
    NE: getAnimal('NE'),
    NW: getAnimal('NW'),
    SE: getAnimal('SE'),
    SW: getAnimal('SW'),
  });
}

const getAnimalMap = (options) => {
  if (options === undefined) return getAni();
  const key = Object.keys(options);
  if (key.includes('sex')) return checkParam(options);
  if (key.includes('sorted') && key.includes('includeNames')) {
    return ({
      NE: getAnimalNameOrder('NE'),
      NW: getAnimalNameOrder('NW'),
      SE: getAnimalNameOrder('SE'),
      SW: getAnimalNameOrder('SW'),
    });
  }
  return checkParam(options);
};

module.exports = getAnimalMap;
