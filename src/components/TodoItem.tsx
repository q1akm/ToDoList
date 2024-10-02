// src/components/TodoItem.tsx
import { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  toggleComplete: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleComplete, removeTodo }) => {
  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <span>{todo.text}</span>
      <button onClick={() => toggleComplete(todo.id)}>
        {todo.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </li>
  );
};

export default TodoItem;
