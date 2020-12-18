import dataContext from './dataContext';
import reducer from '../reducer'

const markItemCompleted = (dispatch) => (id) => {
  dispatch({
    type: 'toggle',
    payload: {
      id
    }
  });
};
const handleDeleteItem = (dispatch) => (id) => {
  dispatch({
    type: 'remove',
    payload: {
      id
    }
  });
};
const handleAddItem = (dispatch) => (text) => {
  dispatch({
    type: 'add',
    payload: {
      text
    }
  });
};


export const { Context, Provider } = dataContext(
  reducer,
  { markItemCompleted, handleDeleteItem, handleAddItem },
  []
);
