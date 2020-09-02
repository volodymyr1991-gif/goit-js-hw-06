import users from "/users.js";

const getUsersWithEyeColor = (users, color) =>
  users.filter(user => user.eyeColor === color).map(user => user);

console.log(getUsersWithEyeColor(users, "blue")); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]
