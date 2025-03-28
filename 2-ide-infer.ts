//example for how typescript compiler infers your code

let x: number = 20; // Explicit, but redundant

// let x = 20; // Implicitly inferred as number (no type needed)

function toLowercase(val: string | number) {
  if (typeof val === "string") {
    return val.toLowerCase(); //valid
  }
  return val.toFixed(2); // Already inferred as number, no explicit casting needed.
}

const number = toLowercase(x)
const hello = toLowercase('HELLO')