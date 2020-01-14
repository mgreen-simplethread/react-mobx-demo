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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
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
