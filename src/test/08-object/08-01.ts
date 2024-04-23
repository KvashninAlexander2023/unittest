export const usersArray = ["Dimych", "Natasha", "Valera", "Katya"];

export const userObj = {
  "0": "Dimych",
  "1": "Natasha",
  "2": "Valera",
  "3": "Katya",
};

export type usersType = {
  [key: string]: { id: number; name: string };
};

///////////////////////////////////////

export const users: usersType = {
  "101": { id: 101, name: "Dimych" },
  "1212": { id: 1212, name: "Natasha" },
  "34345": { id: 34345, name: "Valera" },
  "1": { id: 1, name: "Katya" },
};

var user = { id: 100500, name: "Igor" };

users[user.id] = user;
delete users[user.id];
users[user.id].name = "Vitala";

///////////////////////////////////////

export const userArray = [
  { id: 101, name: "Dimych" },
  { id: 1212, name: "Natasha" },
  { id: 34345, name: "Valera" },
  { id: 1, name: "Katya" },
];

//var userCopy = [...userArray, user]
