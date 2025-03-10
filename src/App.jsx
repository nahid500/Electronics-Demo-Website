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
import CategoriesPage from "./pages/Categories/CategoriesPage";
import AboutUs from "./pages/FooterPages/AboutUs";
import Career from "./pages/FooterPages/Career";
import ContactUs from "./pages/FooterPages/ContactUs";
import TermsConditions from "./pages/FooterPages/TermsConditions";
import PrivacyPolicy from "./pages/FooterPages/PrivacyPolicy";

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
                    <Route path="/products/categories" element={<CategoriesPage />} />
                    <Route path="/products/:category" element={<Products />} />
                    <Route path="/cart" element={<Cart />} /> 
                    <Route path="*" element={<NotFound />} />

                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/career" element={<Career />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-and-conditions" element={<TermsConditions />} />
                    <Route path="/contact-us" element={<ContactUs />} />

                    {/* <Route path="/weshop-certified" element={<WeShopCertified />} />
                    <Route path="/support-center" element={<SupportCenter />} />
                    <Route path="/how-to-shop" element={<HowToShop />} />
                    <Route path="/payment-methods" element={<PaymentMethods />} />
                    <Route path="/cancellation-return-refund" element={<CancellationReturnRefund />} />
                    <Route path="/delivery-terms" element={<DeliveryTerms />} />
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/addresses" element={<Addresses />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/order-history" element={<OrderHistory />} />
                    <Route path="/track-order" element={<TrackOrder />} /> */}


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
