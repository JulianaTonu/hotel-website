import { createBrowserRouter } from "react-router-dom";
import BookRoom from "../components/BookRoom/BookRoom";
import Home from "../components/Home/Home";
import Register from "../components/Register/Register";
import Main from "../layout/Main";
import PrivateRoute from "../private/PrivateRoute";
import Login from './../components/Login/Login';

export const routes = createBrowserRouter([
    {path:'/',
    element:<Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/bookroom',
            element:<PrivateRoute><BookRoom></BookRoom></PrivateRoute>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        }
    ]
}

])