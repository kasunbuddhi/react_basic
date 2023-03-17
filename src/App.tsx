import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Route, Routes, Link} from 'react-router-dom';
import { MyFunction } from './components/MyFuncComp';
import { MyClassComp } from './components/MyClassComp';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/test"> Test </Link>
          </li>
        </ul>
      </nav>
     <Routes>
       <Route path='/' element={<MyClassComp/>} />
       <Route path='/test' element={<MyFunction name = "xyz"/>} />
    </Routes>
    </div>
  );
}

export default App;
