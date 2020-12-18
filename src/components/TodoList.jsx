import { useContext } from 'react';
import { Context } from '../context/itemsContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { items } = useContext(Context);
  return (
    <ul className="todolist">
      {items.map((item) => (
        <TodoItem
          key={item.id}
          {...item}
        />
      ))}
    </ul>
  );
};

export default TodoList;
