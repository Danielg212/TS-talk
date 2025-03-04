
// prefer unset instead of any
const anyValue: any = 10;          // We can assign anything to any
// const unknownValue: unknown =  10; // We can assign anything to unknown just like any 


const s1: string = anyValue;     // Any is assignable to anything 
// const s2: string = unknownValue; // Invalid; we can't assign vUnknown to any other type (without an explicit assertion)

anyValue.method();     // Ok; anything goes with any
// unknownValue.method(); // Not ok; we don't know anything about this variable