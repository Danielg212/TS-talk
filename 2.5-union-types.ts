// 1. it is not reccomended to use enums
// 2. there is a better pattern for "enums" using union types

// type Brand = "Biocatch" | "Google"

enum Brand {
    Biocatch = "Biocatch",
    Google = "Google",
  }
  
  function getBrand(b: Brand) {
    return b
  }
  
  // getBrand("Biocatch")





  //type Brand = "Outbrain" | "Taboola";
