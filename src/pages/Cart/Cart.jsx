import { useCart } from "../../context/Cart/CartContext";
import { Link } from "react-router-dom";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";

const Cart = () => {
    const { cart, removeFromCart, clearCart } = useCart();

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 py-6">
                <h1 className="text-3xl font-bold text-center mb-6">🛒 Your Cart</h1>
                
                {cart.length === 0 ? (
                    <p className="text-center text-gray-600">Your cart is empty.</p>
                ) : (
                    <div className="max-w-lg mx-auto bg-white p-4 shadow-md rounded">
                        {cart.map((item) => (
                            <div key={item.id} className="flex justify-between items-center py-2 border-b">
                                <span>{item.name} (x{item.quantity})</span>
                                <div>
                                    <span className="mr-4">${(item.price * item.quantity).toFixed(2)}</span>
                                    <button
                                        className="text-red-500 font-bold"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        ❌
                                    </button>
                                </div>
                            </div>
                        ))}
                        <div className="flex justify-between font-bold mt-4">
                            <span>Total:</span>
                            <span>
                                ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
                            </span>
                        </div>
                        <button
                            className="w-full bg-red-500 text-white py-2 mt-4 rounded hover:bg-red-700"
                            onClick={clearCart}
                        >
                            Clear Cart
                        </button>
                    </div>
                )}

                {/* Back to Products */}
                <div className="text-center mt-8">
                    <Link to="/products" className="text-blue-500 text-lg font-bold">
                        🔙 Back to Products
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Cart;
