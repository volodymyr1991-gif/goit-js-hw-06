import users from "/users.js";
const calculateTotalBalance = (users) => {
  return users.reduce((accBal, user) => {
    return accBal + user.balance;
  }, 0);
};

console.log(calculateTotalBalance(users)); // 20916

// users.reduce((accBal,user)=>accBal+user.bance,0)
