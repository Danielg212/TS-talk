// how we can update partial object?
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

updateTodo(todo,{x:true}) // ✅ No error, but x is not a property of Todo














// Good ✅
// type PartialTodo = Partial<Todo>;
// type PickTodo = Pick<Todo, "title" | "completed">;
// type OmitTodo = Omit<Todo, "description">;
// type ReadonlyTodo = Readonly<Todo>;