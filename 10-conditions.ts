//how to write conditions in the type syntax?
type isNumber<T> = true

type TestIsNumber = isNumber<string>











// type IsNumber<T> = T extends number ? true : false;
// 
// type Test1 = IsNumber<string>; // false
// type Test2 = IsNumber<number>; // true

// interface Person{
//     name: string;
//     age: number;
//     job: string;
// }
