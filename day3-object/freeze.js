
const student = {
  name: "Isha",
  course: "Full Stack",
  age: 21
};


Object.freeze(student);


student.name = "Priya";      
student.city = "Surat";      
delete student.age;           


console.log(student);
