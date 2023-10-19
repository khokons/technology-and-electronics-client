import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Components/Home/Home';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import AddProducts from './Components/AddProducts/AddProducts';
import Products from './ExtraPath/Products/Products';
import Atechs from './sixBrand/Atechs/Atechs';
import Contact from './Components/Section/Contact';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element: <Home></Home>,
        loader: () => fetch("/techsinfo.json")
        
      },
      {
        path:"/addProducts",
        element: <AddProducts></AddProducts>
      },
      
      {
        path:"/techs",
        element: <Products></Products>,
        loader: ()=> fetch('http://localhost:3389/techs')
       
      },

      {
        path:"/atechs/:id",
        element: <Atechs></Atechs>,
        loader: () => fetch('http://localhost:3389/techs')
        
      },
      {
        path:"/contact",
        element: <Contact></Contact>
      }


    ]
 
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
