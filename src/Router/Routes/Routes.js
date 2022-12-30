import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Media from "../../Pages/Media/Media";
import Message from "../../Pages/Message/Message";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <PrivateRoute><Home></Home></PrivateRoute>,
        },
        {
          path: "/media",
          element: <PrivateRoute><Media></Media></PrivateRoute>
        },
        {
          path: "/message",
          element: <PrivateRoute><Message></Message></PrivateRoute>
        },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        
      ],
    },
    // {
    //   path: "*",
    //   element: <InvalidPage></InvalidPage>,
    // },
  ]);
  
  export default router;