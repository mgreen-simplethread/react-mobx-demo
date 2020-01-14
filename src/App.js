import React from 'react';
import { StoreProvider } from './stores/provider';
import Counter from './components/counter';
import IpAddress from './components/ip-address';
import TodoList from './components/todo-list';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <main className="mini-apps">
          <Counter />
          <IpAddress />
          <TodoList />
        </main>
      </div>
    </StoreProvider>
  );
}

export default App;
