//1. avoid any type
const person: any = {
    firstName: "Daniel",
    lastName: "Giat"
  }
  
  person.age = 30; // No error, but is this intended?
  console.log(person.someNonExistentProperty); // No TypeScript warning, undefined Error at runtime.



  






  
//   interface Person {
//     firstName: string;
//     lastName: string;
//   }
