let person={
    name:"isha",
    age:20,
     fullName: function() {
    return this.firstName + " " + this.lastName;

  },
   eyeColor: "black"
}

console.log(person);
delete person['eyeColor'];
console.log(person);
