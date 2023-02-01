const data = require('../data/zoo_data');

const countAnimals = (paranobj) => {
  if (paranobj === undefined) {
    const obj = data.species.map((specie) => ({
      [specie.name]: specie.residents.length,
    })).sort();
    return Object.assign(...obj);
  }

  const { species, sex } = paranobj;
  const animais = data.species.find((specie) => specie.name === species);

  if (sex === undefined) {
    return animais.residents.length;
  }
  return animais.residents.filter((resident) => resident.sex === sex).length;
};

module.exports = countAnimals;
