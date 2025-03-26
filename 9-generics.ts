//implement a (generic) map function using reduce
function myMap(arr, mapFunc) {
    return arr.reduce((acc, curr) => [...acc, mapFunc(curr)], []);
  }

  const arr = myMap([1, 2, 3], (item) => item.toString()); // ❌ TypeScript doesn’t infer return type
  //    ^?

























//   function myMap<T, U>(arr: T[], mapFunc: (item: T) => U): U[] {
//     return arr.reduce<U[]>((acc, curr) => [...acc, mapFunc(curr)], []);
//    }