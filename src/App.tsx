import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Burger } from './models/Burger';
import { ItemsList } from './components/items-list/ItemsList';

const items: Burger[] = [
  {
    id: 1,
    name: 'burger 1',
    price: 2
  },
  {
    id: 2,
    name: 'burger 2',
    price: 2
  },
  {
    id: 3,
    name: 'burger 3',
    price: 2
  },
  {
    id: 4,
    name: 'burger 4',
    price: 2
  },
  {
    id: 5,
    name: 'burger 5',
    price: 2
  },
  {
    id: 6,
    name: 'burger 5',
    price: 2
  },
  {
    id: 7,
    name: 'burger 5',
    price: 2
  },
  {
    id: 8,
    name: 'burger 5',
    price: 2
  },
  {
    id: 9,
    name: 'burger 5',
    price: 2
  },
  {
    id: 10,
    name: 'burger 5',
    price: 2
  },
]

function App() {
  return (
    <div className="App">
      <Header 
      ></Header>
      <div>
        <ItemsList items={items}></ItemsList>
      </div>
    </div>
  );
}

export default App;
