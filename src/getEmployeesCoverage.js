const data = require('../data/zoo_data');

function searchPeople(chave, valor) {
  let people;
  if (chave === 'name') {
    people = data.employees.find((employee) =>
      employee.firstName === valor || employee.lastName === valor);
  }
  if (chave === 'id') {
    people = data.employees.find((employee) =>
      employee.id === valor);
  }
  if (people === undefined) throw new Error('Informações inválidas');

  return people;
}

function searchAnimal(param) {
  const animais = [];
  data.species.map((specie) =>
    param.responsibleFor.forEach((responsible) => {
      if (responsible === specie.id) {
        animais.push(specie);
      }
    }));

  return animais;
}

const getEmployeesCoverage = (param) => {
  if (param !== undefined) {
    const key = Object.keys(param)[0];
    const valor = Object.values(param)[0];
    const employer = searchPeople(key, valor);
    return {
      id: employer.id,
      fullName: `${employer.firstName} ${employer.lastName}`,
      species: searchAnimal(employer).map((specie) => specie.name),
      locations: searchAnimal(employer).map((specie) => specie.location),
    };
  }

  return data.employees.map((employee) => ({
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: searchAnimal(employee).map((specie) => specie.name),
    locations: searchAnimal(employee).map((specie) => specie.location),
  }));
};

module.exports = getEmployeesCoverage;
