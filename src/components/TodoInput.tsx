import { useState } from "react"


interface TodoInputProps {
  addTodo: (text: string) => void
}


const TodoInput: React.FC<TodoInputProps> = ({addTodo}) => {

  const [inputValue, setInputValue] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new todo..."
        className="border-black border-2"
      />
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default TodoInput