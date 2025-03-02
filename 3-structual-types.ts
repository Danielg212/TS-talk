
class Person {
    name: string;
  }
  
class Book {
    name: string;

  }

  const p: Person = new Book(); // No TypeScript error, but is this logical?


// declare const PersonSymbol: unique symbol;
// declare const BookSymbol: unique symbol;

//unique symbol type in TypeScript ensures that the symbol can't be reproduced,
// effectively creating a unique brand for each class.