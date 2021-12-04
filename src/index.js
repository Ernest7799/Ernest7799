import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
const animals = [
  {
      name: 'Lion',
      kg: 200,
      height: 1.50,
  },
  {
      name: 'monkey',
      kg: 12,
      height: 0.3
  },
  {
      name: 'cat',
      kg: 2,
      height: 0.2,
  }, 
  {
      name: 'dog',
      kg: 15,
      height: 0.8,
  }
]

ReactDOM.render(
  <React.StrictMode>
    <App animals={animals} />
  </React.StrictMode>,
  document.getElementById('root')
);
