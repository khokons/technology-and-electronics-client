import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./Components/Home/Home";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import AddProducts from "./Components/AddProducts/AddProducts";
import Products from "./ExtraPath/Products/Products";
import Atechs from "./sixBrand/Atechs/Atechs";
import Contact from "./Components/Section/Contact";
import AuthProvider from "./Components/Providers/AuthProvider";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import PrivateRoute from "./PrivateRoute";
import DetailsPage from "./Components/DetailsPage/DetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/techsinfo.json")
      },

      {
        path: "/addProducts",
        element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
      },

      {
        path: "/techs",
        element: <Products></Products>,
        loader: () => fetch("http://localhost:3389/techs")
      },

      {
        path: "/atechs/:id",
        element: <Atechs></Atechs>,
        loader: () => fetch("http://localhost:3389/techs")
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path:"/register",
        element: <Register></Register>
      },
      {
        path: "/details/:brand_name",
        element: <DetailsPage></DetailsPage>,
        loader: () => fetch('http://localhost:3389/techs')
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
