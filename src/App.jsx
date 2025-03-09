import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Homepage/HomePage";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Products from "./pages/Products/Products";
import Dashboard from "./pages/Dashboard";
import AuthProvider from "./context/AuthProvider";
import PrivateOutlet from "./components/PrivateOutlet";
import Register from "./pages/Register/Register";
import { CartProvider } from "./context/Cart/CartContext";  
import Cart from "./pages/Cart/Cart"; 
import { ToastContainer } from 'react-toastify';
import ProductDetails from "./pages/Products/ProductDeatils";

function App() {
    return (
        <AuthProvider>
            <CartProvider> 
                <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/product/:id" element={<ProductDetails />} /> 
                    <Route path="/cart" element={<Cart />} /> 
                    <Route path="*" element={<NotFound />} />

                    <Route element={<PrivateOutlet />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Route>


                    
                </Routes>
                <ToastContainer />
            </CartProvider>
        </AuthProvider>
    );
}

export default App;
