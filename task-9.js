import users from "/users.js";

const getNamesSortedByFriendsCount = (users) =>
  users
    .sort(
      (frendsPrew, frendsNext) =>
        frendsPrew.friends.length - frendsNext.friends.length
    )
    .map((bigFriemds) => {
      return bigFriemds.name;
    });

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
