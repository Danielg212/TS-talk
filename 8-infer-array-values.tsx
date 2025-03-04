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

// context:
const makeDropdown = () => {
  // user selects one of these
  return (
    <select>
      {colors.map(color => <option>{color}</option>)}
    </select>
  );
}


//type Color = typeof colors[number]
