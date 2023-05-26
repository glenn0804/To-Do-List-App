import React from 'react';

function TodoItem({ task, completeTask, deleteTask }) {
  const { title, completed } = task;

  return (
    <div>
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{title}</span>
      <button onClick={completeTask}>{completed ? 'Undo' : 'Complete'}</button>
      <button onClick={deleteTask}>Delete</button>
    </div>
  );
}

export default TodoItem;
