import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home'
import Products from './Components/Products/Products'
import Cart from './Components/Cart/Cart'
import Brands from './Components/Brands/Brands'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Categories from './Components/Categories/Categories'
import Layout from './Components/Layout/Layout'
import Wishlist from './Components/Wishlist/Wishlist';
import Logout from './Components/Logout/Logout';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import { CartContextProvider } from './Context/CartContext';
import UserContextProvider from './Context/UserContext';
import { Toaster } from 'react-hot-toast';
import ProtectRoute from './Components/ProtectedRoute/ProtectedRoute';


let routers = createBrowserRouter([
  { path: '/', element: <Layout />, children: [
    {index:true , element:<ProtectRoute><Home /></ProtectRoute>},
    {path:'Products' , element:<ProtectRoute><Products /></ProtectRoute>},
    {path:'Cart' , element:<ProtectRoute><Cart /></ProtectRoute>},
    {path:'Categories' , element:<ProtectRoute><Categories /></ProtectRoute>},
    {path:'Wishlist' , element:<ProtectRoute><Wishlist /></ProtectRoute>},
    {path:'Logout' , element:<ProtectRoute><Logout /></ProtectRoute>},
    {path:'Brands' , element:<ProtectRoute><Brands /></ProtectRoute>},
    {path:'Login' , element:<ProtectRoute><Login /></ProtectRoute>},
    {path:'ProductDetails/:id' , element:<ProtectRoute><ProductDetails /></ProtectRoute>},

    {path:'Register' , element:<ProtectRoute><Register /></ProtectRoute>},
  ] }
])

function App() {
  return<UserContextProvider>
  <CartContextProvider>
    <RouterProvider router={routers}></RouterProvider>
  </CartContextProvider>
  <Toaster/>
</UserContextProvider>

}

export default App;
