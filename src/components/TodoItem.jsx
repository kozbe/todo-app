import { useRef, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../context/itemsContext';

const ListItem = styled('li')(({ done }) => ({
  ...(done && {
    '.form-check-label': {
      color: '#999',
      textDecoration: 'line-through'
    }
  })
}));

const TodoItem = ({ text, id, done }) => {
  const { markItemCompleted, handleDeleteItem } = useContext(Context);
  const itemRef = useRef(null);

  const itemClass = `form-check todoitem`;

  const markCompleted = () => {
    markItemCompleted(id);
  };

  const deleteItem = () => {
    handleDeleteItem(id);
  };

  useEffect(() => {
    if (itemRef.current) {
      // 1. Add highlight class.
      itemRef.current.classList.add('highlight');

      // 2. Set timeout.
      setTimeout(
        (listItem) => {
          // 3. Remove highlight class.
          listItem.classList.remove('highlight');
        },
        500,
        itemRef.current
      );
    }
  }, []);

  return (
    <ListItem done={done} className={itemClass} ref={itemRef}>
      <label className="form-check-label">
        <input
          checked={done}
          type="checkbox"
          className="form-check-input"
          onChange={markCompleted}
        />{' '}
        {text}
      </label>
      <button
        type="button"
        className="btn btn-danger btn-sm"
        onClick={deleteItem}
      >
        x
      </button>
    </ListItem>
  );
};

export default TodoItem;
