import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayOut from "./Layout/MainLayOut";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register";
import SignIn from "./Pages/Shared/SignIn";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <h2>This page is not found</h2>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
          path:'/signin',
          element:<SignIn></SignIn>
        }
    ]
  },
]);

export default router;