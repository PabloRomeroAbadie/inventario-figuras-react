import React from 'react'
import {Routes, Route, Link} from "react-router-dom";
import Home from './routes/Home';
import Register from './routes/Register';
import Store from './store/Store';
import Menu from './components/Menu'; 
import Edit from './routes/Edit';

const App = () => {
  return (
   <Store>
    <Menu></Menu>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='register' element={<Register />}></Route>
        <Route path='edit/:id' element={<Edit />}></Route>
      </Routes>
    </Store>
  
  )
}

export default App