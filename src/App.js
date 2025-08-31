import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import YourOrder from "./components/YourOrder";

import { SelectedProvider } from "./components/Context/selectedContext";


const App = () => {
  
  return (
    <BrowserRouter>
    <SelectedProvider>
      <Routes> 
        <Route path="/" element={<Home/>}/>
        <Route path='/Your-Order' element={<YourOrder/>} />
      </Routes>
      </SelectedProvider>
    </BrowserRouter>
  )
}

export default App