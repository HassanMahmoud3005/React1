import React, { Component } from 'react';
import Home from './component/Home/Home'
import About from './component/about/About';
import Gallery from './component/gallery/Gallery';
import Contact from './component/Contact/Contact';
import Footer from './component/footer/Footer';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import "../src/App.css"
import Eror from './component/404/404';


const router = createHashRouter([
    {path:"" , element:<Home/>},
    {path:"home" , element:<Home/>},
    {path:"about" , element:<About/>},
    {path:"portfolio" , element:<Gallery/>},
    {path:"contact" , element:<Contact/>},
    {path:"*" , element:<Eror/>},
])



class App extends Component {
  render() {
    return <>
    <RouterProvider router={router}/>
    </>
  }
}

export default App;
