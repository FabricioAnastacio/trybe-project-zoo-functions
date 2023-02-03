const data = require('../data/zoo_data');

const isManager = (id) => {
  const manage = [];
  data.employees.forEach((people) => {
    manage.push(...people.managers);
  });

  return manage.some((manager) => manager === id);
};

const getRelatedEmployees = (managerId) => {
  const peopleGeridas = [];
  data.employees.forEach((employee) => employee.managers.forEach((manager) => {
    if (manager === managerId) {
      peopleGeridas.push(`${employee.firstName} ${employee.lastName}`);
    }
  }));
  if (isManager(managerId) !== true) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  return peopleGeridas;
};

module.exports = { isManager, getRelatedEmployees };
