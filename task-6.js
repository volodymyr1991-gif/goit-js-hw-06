import users from "/users.js";

const getUsersWithAge = (users, min, max) =>
  users.filter((use) => use.age >= min && use.age <= max).map((use) => use);
// твій код
console.log(getUsersWithAge(users, 20, 30)); // [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]
