import React from'react';
import ReactDOM from'react-dom';

import Calculator from './components/Calculator'

import './App.css'

const App = () =>(
      <div>
        <Calculator />
      </div>
    )

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
