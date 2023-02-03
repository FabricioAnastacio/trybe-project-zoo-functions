const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const people = data.employees.find((employee) => employee.id === id);
  const animal = data.species.find((specie) => specie.id === people.responsibleFor[0]);
  const result = animal.residents.reduce((acc, crr) => {
    if (acc.age > crr.age) {
      return acc;
    }
    return crr;
  });

  return Object.values(result);
};

module.exports = getOldestFromFirstSpecies;
