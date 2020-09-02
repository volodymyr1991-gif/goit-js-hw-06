import users from "/users.js";

const getUsersWithFriend = (users, friendName) => 

  users.filter((use)=>use.friends.includes(friendName)
  ).map(use=>use.name);



console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]



// users.reduce((frendOnFrends, user) => {
//   if (user.friends.includes(friendName)) {
//     frendOnFrends.push(user.name);
//   }
//   return frendOnFrends;
// }, []);