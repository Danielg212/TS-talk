//With infer, the compiler ensures that you have declared all type variables explicitly:

interface MyType1 {
  type: "type1"; // discriminator
  a: string;
  b: number;
  c: boolean;
}

interface MyType2 {
  type: "type2"; // discriminator
  d: string;
  e: number;
  f: boolean;
}

type AllPossibleKeysOf<U> = U extends any ? keyof U : never;

type Exclusify<U> = [U] extends [infer V]
  ? V extends any
    ? V & Partial<Record<Exclude<AllPossibleKeysOf<U>, keyof V>, never>>
    : never
  : never;

type CustomType = MyType1 | MyType2;
type ExclusiveCustomType = Exclusify<CustomType>;

let customType: ExclusiveCustomType = {
  type: "type1",
  a: "yes",
  b: 2,
  c: true,
}; // ✅ Works
