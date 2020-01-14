import React, { useCallback } from 'react';
import { useStore } from '../../stores/provider';
import { observer } from 'mobx-react';

function Counter() {
  const { counter } = useStore();
  const increment = useCallback((evt) => {
    evt.preventDefault();
    counter.increment();
  }, []);
  const decrement = useCallback((evt) => {
    evt.preventDefault();
    counter.decrement();
  }, []);

  return (
    <section className="counter">
      <h2 className="section-title">Counter</h2>

      <p className="current-count">Current count: {counter.count}</p>

      <div className="buttons">
        <button onClick={decrement}>--</button>
        <button onClick={increment}>++</button>
      </div>
    </section>
  );
}

export default observer(Counter);
