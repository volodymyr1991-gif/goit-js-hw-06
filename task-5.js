import users from "/users.js";

const getUserWithEmail = (users, email) => users.find(user => user.email === email);
  // твій код
;

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {об'єкт користувача Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {об'єкт користувача Elma Head}
