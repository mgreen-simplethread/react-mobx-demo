import React from 'react';
import { useStore } from '../../stores/provider';
import { observer } from 'mobx-react';

function TodoList() {
  return (
    <section className="todo-list">
      <h2 className="section-title">Todo List</h2>
    </section>
  );
}

export default observer(TodoList);
