import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/brandPage',
                element: <Home></Home>
            },
            {
                path:'/productDetails',
                element: <Home></Home>
            },
            {
                path:'/addProduct',
                element: <Home></Home>
            },
            {
                path:'/updateProduct',
                element: <Home></Home>
            },
            {
                path:'/myCart',
                element: <Home></Home>
            },
            {
                path:'/login',
                element: <Home></Home>
            },
            {
                path:'/register',
                element: <Home></Home>
            },
        ]
    },
]);

export default Routes;