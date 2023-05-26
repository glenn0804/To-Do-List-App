import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, completeTask, deleteTask }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          completeTask={() => completeTask(index)}
          deleteTask={() => deleteTask(index)}
        />
      ))}
    </div>
  );
}

export default TodoList;
