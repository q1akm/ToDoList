import TodoItem from './TodoItem';
import { Todo } from '../types';


interface TodoListProps {
  todos: Todo[];
  toggleComplete: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, removeTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
