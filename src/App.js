import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//import { useContext } from "react";
//import { v4 as uuidv4 } from 'uuid'
import FrontLoadingPage from './components/FrontLoadingPage'
import Home from './components/Home'
import YourOrder from "./components/YourOrder";

import { SelectedProvider } from "./components/Context/selectedContext";
//import { SelectedContext } from "./components/Context/selectedContext";

// const Menu = [
//         {
//             name: "Normal Dosa",
//             category: "Main-Item",
//             image_URL: "/traditplain-dosa.jpg",
//             price: 15,
//             qty: 0,
//             id: uuidv4()
//         },
//         {
//             name: "Normal-Masala",
//             category: "MASALA",
//             image_URL: '/bottom-view-dosa-masala-normal.jpg',
//             price: 15,
//             qty: 0,
//             id: uuidv4()
//         },
//         {
//             name: 'Full Set Masala Dosa',
//             category: "Main-Item",
//             image_URL: '/full-set-masala-dosa.jpg',
//             price: 45,
//             qty: 0,
//             id: uuidv4()
//         }, {
//             name: 'Kutty Dosa 3pcs',
//             category: "Main-Item",
//             image_URL: '/kutty-dosa.jpg',
//             price: 45,
//             qty: 0,
//             id: uuidv4()
//         }, {
//             name: 'idli 3pcs',
//             category: "Main-Item",
//             image_URL: '/idli.jpg',
//             price: 25,
//             qty: 0,
//             id: uuidv4()
//         }, {
//             name: 'Red chutney',
//             category: "Side-Dish",
//             image_URL: '/Tomato Chutney.jpeg',
//             price: 5,
//             qty: 0,
//             id: uuidv4()
//         }, {
//             name: 'white chutney',
//             category: "Side-Dish",
//             image_URL: '/white-chutney.jpeg',
//             price: 5,
//             qty: 0,
//             id: uuidv4()
//         }
//     ];

const App = () => {
  //const setMenu = useContext(SelectedContext)
  //setMenu(Menu)
  return (
    <BrowserRouter>
    <SelectedProvider>
      <Routes> 
        <Route path="/loading" element={<FrontLoadingPage />} />
        <Route path="/" element={<Home/>}/>
        <Route path='/Your-Order' element={<YourOrder/>} />
      </Routes>
      </SelectedProvider>
    </BrowserRouter>
  )
}

export default App