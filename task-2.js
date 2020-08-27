import users from "/users.js";

const getUsersWithEyeColor = (users, color) =>
  users.filter((el) => el.eyeColor === color).map((el) => el);

console.log(getUsersWithEyeColor(users, "blue")); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]
