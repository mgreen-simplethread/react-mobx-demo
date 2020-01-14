import React, { useState, useCallback } from 'react';
import { useStore } from '../../stores/provider';
import { observer } from 'mobx-react';
import TaskList from './task-list';

function TodoList() {
  const { todoList } = useStore();
  const [task, setTask] = useState('');

  const updateTask = useCallback((evt) => {
    setTask(evt.target.value);
  }, []);

  const addTask = useCallback((evt) => {
    evt.preventDefault();
    todoList.addTodo(task);
    setTask('');
  }, [task]);

  return (
    <section className="todo-list">
      <h2 className="section-title">Todo List</h2>

      <form className="task-form" onSubmit={addTask}>
        <p>
          <input name="task-text" onChange={updateTask} placeholder="Buy milk" value={task} />
        </p>
        <button type="submit">Add Task</button>
      </form>

      <div className="todo-list__tasks">
        <TaskList />
      </div>
    </section>
  );
}

export default observer(TodoList);
