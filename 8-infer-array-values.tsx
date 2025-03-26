// here we want to infer the type of the array values - especially in our switch statement
const colors = ["Troopa Green", "Blastoise Blue", "Gerudo Sunset"];
//    ^?


type Color = string;
//    ^?


const toRGB = (color: Color) => {
  switch (color) {
    case "A Troopa Green":
      return "#6abe30";

    case "Blastoise Blue":
      return "#2a66b0";

    case "Gerudo Sunset":
      return "#e97451";
  }
};

// this is ok
toRGB("Troopa Green");


// this should be an error
// because it's a typo
toRGB("Tropa Green");






//1. type Color = typeof colors[number]
//2. return string OR
// default:
//   return color satisfies never;
//3. if we want to be really fancy:
// type ColorsType<T extends readonly string[]> = T[number];
// type Color = ColorsType<typeof colors>;
