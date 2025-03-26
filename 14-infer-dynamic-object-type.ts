interface PayloadMap {
    login: { email: string; password: string };
    user: { username: string; id: string };
    logout: {}; // No additional payload needed
  }


type AnyDynamicPayload = {
  [INDEX in keyof PayloadMap]: { type: INDEX; payload: PayloadMap[INDEX] };
}[keyof PayloadMap];

  
const dynamicPayload: AnyDynamicPayload = {
    type: 'login', 
    payload: {email:"dsa2", password:"dsad"}
  }; 
  