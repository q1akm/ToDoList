import { useState } from "react"
import { Todo } from "./types";
import TodoInput from "./components/TodoInput";

const App = () => {

  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false
    }
    setTodos ([...todos, newTodo]);
  };

  return (
    <div>
      <h1>TodoList</h1>
      <TodoInput addTodo={addTodo}/>
    </div>
  )
}

export default App