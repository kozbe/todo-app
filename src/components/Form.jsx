import React, { useState, useContext } from 'react';
import { Context } from '../context/itemsContext';

const Form = () => {
  const { items, handleAddItem } = useContext(Context) 
  const [text, setText] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    handleAddItem(text);
    setText('');
  };

  return (
    <form onSubmit={onFormSubmit} className="row">
      <div className="col-md-3">
        <input
          type="text"
          className="form-control"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </div>
      <div className="col-md-3">
        <button className="btn btn-primary" disabled={!text} type="submit">
          {`Add # ${items.length + 1}`}
        </button>
      </div>
    </form>
  );
};

export default Form;
