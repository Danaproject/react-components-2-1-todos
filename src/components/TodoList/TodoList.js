import './TodoList.css';
import Todo from '../Todo';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted, onMakeItemClassName }) => (
    <ul className="TodoList">
        {todos.map(({ id, text, completed }) => (
        <li key={id} className={onMakeItemClassName(completed)}>
        <Todo
          text={text}
          completed={completed}
          onToggleCompleted={() => onToggleCompleted(id)}
          onDelete={() => onDeleteTodo(id)}
        />
      </li>
    ))}
  </ul>
);

export default TodoList;