interface PayloadMap {
  login: { email: string; password: string };
  user: { username: string; id: string };
  logout: {}; // No payload required
}   

// Main type that ensures strict type-to-payload binding
type DynamicPayload<K extends keyof PayloadMap> = {
  type: K;
  payload: PayloadMap[K];
};

// Extract a specific payload type dynamically
type ExtractPayload<K extends keyof PayloadMap> = PayloadMap[K];

// Create a strict union of all valid payloads
type PayloadTypeUnion = {
  [K in keyof PayloadMap]: DynamicPayload<K>;
}[keyof PayloadMap];

// Readonly version to prevent mutations
type ReadonlyDynamicPayload<K extends keyof PayloadMap> = Readonly<DynamicPayload<K>>;

// DeepPartial to allow partial updates
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// Partial payload support
type PartialDynamicPayload<K extends keyof PayloadMap> = {
  type: K;
  payload: DeepPartial<PayloadMap[K]>;
};
// Example Usage
const validPayload: PayloadTypeUnion = {
  type: "login",
  payload: { email: "test@example.com", password: "secure123" },
}; // ✅ Works

const invalidPayload: PayloadTypeUnion = {
  type: "login",
  payload: { email: "test@example.com", username: "wrong" },
}; // ❌ ERROR: username is not a valid field for 'login'
