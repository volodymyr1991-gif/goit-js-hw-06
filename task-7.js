import users from "/users.js";
const calculateTotalBalance = (users) =>
  users.reduce((accBal, user) => {
    return accBal + user.balance;
  }, 0);
console.log(calculateTotalBalance(users)); // 20916


