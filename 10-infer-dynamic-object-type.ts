interface PayloadMap {
    login: { email: string; password: string };
    user: { username: string; id: string };
    logout: {}; // No additional payload needed
  }

//   type DynamicPayload<T extends keyof PayloadMap> = {
//     type: T;
//     payload: PayloadMap[T];
//   };

// type AnyDynamicPayload = {
//   [K in keyof PayloadMap]: { type: K; payload: PayloadMap[K] };
// }[keyof PayloadMap];


type SuperDynamicPayload<T extends keyof PayloadMap = keyof PayloadMap> = {
    type: T;
    payload: PayloadMap[T];
  };
  

const dynamicPayload: SuperDynamicPayload = {
    type: 'login', 
    payload: { }
  }; 
  

//   const dynamicPayload1: DynamicPayload<'user'> = {
//     type:`user`,
//     payload:{}
//   }; // ✅ Works fine  