import { createBrowserRouter } from "react-router-dom";
import About from "../../About/About";
import Main from "../../Layouts/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Media from "../../Pages/Media/Media";
import Message from "../../Pages/Message/Message";
import Register from "../../Pages/Register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/media",
          element: <Media></Media>
        },
        {
          path: "/message",
          element: <Message></Message>
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