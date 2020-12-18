import React from 'react';
import './App.scss';

import { Provider } from './context/itemsContext';
import TodoList from './components/TodoList';
import Form from './components/Form';

const TodoApp = () => {

  return (
    <Provider>
      <h3 className="apptitle">TO DO LIST</h3>
      <div className="row">
        <div className="col-md-3">
          <TodoList />
        </div>
      </div>
      <Form />
    </Provider>
  );
};

export default TodoApp;
