interface PayloadMap {
    login: { email: string; password: string };
    user: { username: string; id: string };
    logout: {}; // No additional payload needed
  }


type AnyDynamicPayload = {
  [K in keyof PayloadMap]: { type: K; payload: PayloadMap[K] };
}[keyof PayloadMap];

  
const dynamicPayload: AnyDynamicPayload = {
    type: 'user', 
    payload: { username: 'test', id: '123' }
  }; 
  