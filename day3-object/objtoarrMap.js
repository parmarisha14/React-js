const users = {
  user1: { name: "Isha", age: 21 },
  user2: { name: "Mitesh", age: 25 },
  user3: { name: "Parth", age: 19 }
};


const names = Object.values(users).map(user => user.name);

console.log(names);

