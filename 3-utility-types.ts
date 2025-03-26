// how we can update partial object?
interface TodoTask {
    title: string;
    description: string;
    completed: boolean;
  }
  
  // BAD ❌
  function updateTodo(todo: TodoTask, partialTodo: any): TodoTask { 
    return { ...todo, ...partialTodo };
  }

const todo:TodoTask = {
    title: "TypeScript",
    description: "Discover the gems of TS!",
    completed: false,
}

updateTodo(todo,{x:true}) // ✅ No error, but x is not a property of Todo
















// Good ✅
// type PartialTodo = Partial<TodoTask>;
// type PickTodo = Pick<TodoTask, "title" | "completed">;
// type OmitTodo = Omit<TodoTask, "description">;
// type ReadonlyTodo = Readonly<TodoTask>;
//  type ReatOnlyType = Readonly<Partial<TodoTask>>;
