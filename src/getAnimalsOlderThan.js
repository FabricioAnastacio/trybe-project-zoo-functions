const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  let animals = '';
  data.species.forEach((specie) => {
    if (specie.name === animal) {
      animals = specie.residents;
    }
  });
  return animals.every((type) => type.age >= age);
};

module.exports = getAnimalsOlderThan;
