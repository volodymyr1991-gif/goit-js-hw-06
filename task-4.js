import users from "/users.js";

const getInactiveUsers = (users) => {
  return users.filter((el) => !el.isActive);
};

console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]
