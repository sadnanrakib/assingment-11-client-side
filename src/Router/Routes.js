import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Blog from "../Pages/Home/Blog/Blog";
import Home from "../Pages/Home/Home/Home";
import Service from "../Pages/Home/service/service";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/singUp/SingUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/service",
        element: <Service></Service>,
      },
      {
        path: "/checkout/:id",
        element: <CheckOut></CheckOut>,
        loader: ({ params }) =>
          fetch(
            `https://assingment-server-11.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/singup",
        element: <SingUp></SingUp>,
      },
    ],
  },
]);
