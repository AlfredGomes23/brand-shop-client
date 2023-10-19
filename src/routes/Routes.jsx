import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import BrandDetails from "../pages/BrandDetails";
import ProductDetails from "../pages/ProductDetails";
import AddProduct from "../pages/AddProduct";
import UpdateProduct from "../pages/UpdateProduct";
import MyCart from "../pages/MyCart";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
                element: <BrandDetails></BrandDetails>
            },
            {
                path:'/productDetails',
                element: <ProductDetails></ProductDetails>
            },
            {
                path:'/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path:'/updateProduct',
                element: <UpdateProduct></UpdateProduct>
            },
            {
                path:'/myCart',
                element: <MyCart></MyCart>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
        ]
    },
]);

export default Routes;