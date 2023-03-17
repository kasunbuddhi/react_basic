import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Route, Routes} from 'react-router-dom';
import { MyFunction } from './components/MyFuncComp';
import { MyClassComp } from './components/MyClassComp';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path='/' element={<MyClassComp/>} />
       <Route path='/test' element={<MyFunction name = "xyz"/>} />
    </Routes>
    </div>
  );
}

export default App;
