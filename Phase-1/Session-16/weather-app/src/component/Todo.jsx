// Todo.jsx
import React, { useContext, useState } from 'react';
import { TodoContext } from '../redux/store';
import { actionTypes } from '../redux/todoSlice';

const Todo = () => {
  const { state, dispatch } = useContext(TodoContext);
  const [input, setInput] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch({ type: actionTypes.ADD_TASK, payload: input });
    setInput('');
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <form onSubmit={handleAdd} className="d-flex mb-3">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Add task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">Add</button>
        </form>

        <ul className="list-group">
          {state.tasks.map((task, index) => (
            <li
              key={index}
              className={`list-group-item d-flex justify-content-between align-items-center ${
                task.completed ? 'list-group-item-success' : ''
              }`}
            >
              <span
                onClick={() =>
                  dispatch({ type: actionTypes.TOGGLE_TASK, payload: index })
                }
                style={{
                  cursor: 'pointer',
                  textDecoration: task.completed ? 'line-through' : 'none',
                }}
              >
                {task.text}
              </span>
              <button
                className="btn btn-sm btn-danger"
                onClick={() =>
                  dispatch({ type: actionTypes.DELETE_TASK, payload: index })
                }
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        {state.tasks.length === 0 && (
          <p className="text-center mt-3 text-muted">No tasks yet</p>
        )}
      </div>
    </div>
  );
};

export default Todo;
