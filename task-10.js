import users from "/users.js";

// const getSortedUniqueSkills = (users) =>
//   users
//     .reduce((accUS, el) => {
//       accUS.push(...el.skills);
//       return accUS;
//     }, [])
//     .filter((el, ind, arr) => arr.indexOf(el) === ind)
//     .sort();

// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
const getSortedUniqueSkills = users => {
  const uniqeSkills = Array.from(new Set(users.reduce((allSkills, user) => {
      allSkills.push(...user.skills);
      return allSkills
  }, []))).sort();
  return uniqeSkills;
};
console.log(getSortedUniqueSkills(users)); 


