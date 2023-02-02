const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  let kids = 0;
  let adults = 0;
  let seniors = 0;
  entrants.forEach((people) => {
    if (people.age < 18) {
      kids += 1;
    } else if (people.age >= 18 && people.age < 50) {
      adults += 1;
    } else if (people.age >= 50) {
      seniors += 1;
    }
  });

  return {
    child: kids,
    adult: adults,
    senior: seniors,
  };
};

const calculateEntry = (entrants) => {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  if (entrants[0] === undefined) {
    const kid = entrants.child * data.prices.child;
    const adults = entrants.adult * data.prices.adult;
    const seniors = entrants.senior * data.prices.senior;
    return kid + adults + seniors;
  }
  if (entrants[0] !== undefined) {
    const kid = countEntrants(entrants).child * data.prices.child;
    const adults = countEntrants(entrants).adult * data.prices.adult;
    const seniors = countEntrants(entrants).senior * data.prices.senior;
    return kid + adults + seniors;
  }
};

module.exports = { calculateEntry, countEntrants };
