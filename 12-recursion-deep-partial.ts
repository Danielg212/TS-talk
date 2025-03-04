//how do we do recursion with type? (let's try to implement the DeepPartial type)

interface Todo {
    title: string;
    description: string;
    completed: boolean;
    address: {
      city: string;
      street: string;
      zip: number;
    };
  }

  // Bad ❌
  //The native Partial<T> makes only the first-level properties optional, but it does not apply recursively to nested objects.
  const partialTodo: Partial<Todo> = {
    title: "make it partial",
     // ❌ ERROR: 'street' and 'address' are still required
    address: {
      city: "New York",
    },
  };
  
//   type DeepPartial<T> = {[P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]};

  
