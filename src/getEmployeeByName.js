const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  let people = {};
  data.employees.forEach((employee) => {
    if (employee.firstName === employeeName) {
      people = employee;
    }
    if (employee.lastName === employeeName) {
      people = employee;
    }
  });

  return people;
};

module.exports = getEmployeeByName;
