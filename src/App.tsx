import React from 'react';
import './App.css';
import { Header } from './shared/header/Header';

function App() {
  return (
    <div className="App">
      <Header 
        onCreateAccount={() => console.log('onCreateAccount')}
        onLogin={() => console.log('onLogin')} 
        onLogout={() => console.log('onLogout')}
      ></Header>
    </div>
  );
}

export default App;
