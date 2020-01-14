import React, { useCallback } from 'react';
import { observer } from 'mobx-react';

function Task({ task, done, id, toggleDone, onDelete }) {
  const klass = ['todo'];

  if (done) {
    klass.push('done');
  }

  return (
    <div className={klass.join(' ')}>
      <span className="todo__task">{task}</span>
      <button onClick={toggleDone}>Mark {done ? 'Incomplete' : 'Complete'}</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default observer(Task);
