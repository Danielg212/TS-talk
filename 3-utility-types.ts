interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }
  
  function updateTodo(todo: Todo, partialTodo: any): Todo { // BAD ❌
    return { ...todo, ...partialTodo };
  }

const todo:Todo = {
    title: "TypeScript",
    description: "Discover the gems of TS!",
    completed: false,
}

// updateTodo(todo,{})


// Good ✅
// type PartialTodo = Partial<Todo>;
// type PickTodo = Pick<Todo, "title" | "completed">;
// type OmitTodo = Omit<Todo, "description">;
// type ReadonlyTodo = Readonly<Todo>;