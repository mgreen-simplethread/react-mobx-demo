import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../stores/provider';
import Task from './task';

function TaskList() {
  const { todoList } = useStore();

  return (
    <div className="task-list">
      <div className="task-list__pending">
        <h3>Pending Tasks</h3>
        {todoList.pendingTodos.map((todo) => (
          <Task
            task={todo.task}
            done={todo.done}
            id={todo.id}
            key={todo.id}
            toggleDone={() => todoList.toggleTodo(todo.id)}
            onDelete={() => todoList.deleteTodo(todo.id)}
          />
        ))}
      </div>

      <div className="task-list__done">
        <h3>Completed Tasks</h3>
        {todoList.completedTodos.map((todo) => (
          <Task
            task={todo.task}
            done={todo.done}
            id={todo.id}
            key={todo.id}
            toggleDone={() => todoList.toggleTodo(todo.id)}
            onDelete={() => todoList.deleteTodo(todo.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default observer(TaskList);
