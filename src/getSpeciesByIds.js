const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const species = ids.map((id) => data.species.find((specie) => specie.id === id));
  return species;
};

module.exports = getSpeciesByIds;
