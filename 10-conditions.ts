//how to write conditions in the type syntax?
type IsNumber<T> = true

type TestIsNumber = IsNumber<string>






























// type IsNumber<T> = T extends number ? true : false;
// 
// type Test1 = IsNumber<string>; // false
// type Test2 = IsNumber<number>; // true
