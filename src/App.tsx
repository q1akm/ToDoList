import { useState } from "react"
import { Todo } from "./types";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

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


  const toggleComplete = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="p-10 flex flex-col gap-5">
      <h1 className="text-xl">ToDoList</h1>
      <TodoInput addTodo={addTodo}/>
      <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
    </div>
  )
}

export default App