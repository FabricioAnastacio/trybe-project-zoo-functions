const data = require('../data/zoo_data');

function checkDay(param) {
  if (param !== 'Monday') {
    return `Open from ${data.hours[param].open}am until ${data.hours[param].close}pm`;
  }

  return 'CLOSED';
}

function checkAnimal(param) {
  if (param === 'Monday') {
    return 'The zoo will be closed!';
  }

  const test = [];
  data.species.map((week) => week.availability.forEach((tests) => {
    if (tests === param) {
      test.push(week.name);
    }
  }));

  return test;
}

const getSchedule = (scheduleTarget) => {
  const weekDays = Object.keys(data.hours).some((key) => key === scheduleTarget);
  if (weekDays === true) {
    return { [scheduleTarget]: {
      officeHour: checkDay(scheduleTarget),
      exhibition: checkAnimal(scheduleTarget) },
    };
  }
  const animais = data.species.some((specie) => specie.name === scheduleTarget);
  if (scheduleTarget === undefined || animais === false) {
    return Object.assign(...Object.keys(data.hours).map((day) => ({
      [day]: {
        officeHour: checkDay(day),
        exhibition: checkAnimal(day),
      },
    })));
  }
  const animail = data.species.find((specie) => specie.name === scheduleTarget);
  return animail.availability;
};

module.exports = getSchedule;
