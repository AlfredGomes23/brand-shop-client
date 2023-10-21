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
import PrivateRoute from "./PrivateRoute";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/brandPage/:b_id',
                element: <BrandDetails></BrandDetails>
            },
            {
                path: '/productDetails/:p_id',
                element: <PrivateRoute>
                    <ProductDetails></ProductDetails>
                </PrivateRoute>
            },
            {
                path: '/addProduct',
                element: <PrivateRoute>
                    <AddProduct></AddProduct>
                </PrivateRoute>
            },
            {
                path: '/updateProduct/:id',
                element: <PrivateRoute>
                    <UpdateProduct></UpdateProduct>
                </PrivateRoute>
            },
            {
                path: '/myCart',
                element: <PrivateRoute>
                    <MyCart></MyCart>
                </PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
]);

export default Routes;