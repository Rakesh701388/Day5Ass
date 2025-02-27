import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask } from '../redux/actions';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const [taskInput, setTaskInput] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskInput.trim()) {
      dispatch(addTask(taskInput));
      setTaskInput('');
    }
  };

  return (
    <div className="mt-4">
      <h3>Task List</h3>
      <form onSubmit={handleAddTask} className="mb-3">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter task..."
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary">
            Add Task
          </button>
        </div>
      </form>
      <ul className="list-group">
        {tasks.length === 0 && <li className="list-group-item">No tasks added yet</li>}
        {tasks.map(task => (
          <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
            {task.text}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => dispatch(deleteTask(task.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
