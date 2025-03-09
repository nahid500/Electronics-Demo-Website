import { useLocation, useParams, Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { useCart } from "../../context/Cart/CartContext";

const ProductDetails = () => {
    const { id } = useParams(); // Get the product ID from the URL params
    const { addToCart } = useCart();
    const location = useLocation();
    
    // Try to get the product data from the state passed by the Products page
    const productFromState = location.state ? location.state.product : null;

    // Find the product by ID if not passed through state
    const product = productFromState || products.find((prod) => prod.id === parseInt(id));

    if (!product) {
        return <div>Product not found. <Link to="/products">Go back to products.</Link></div>;
    }

    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 py-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold">{product.name}</h1>
                    <Link to="/products" className="text-blue-500 text-lg">
                        Back to Products
                    </Link>
                </div>

                <div className="flex">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-1/2 h-auto object-cover"
                    />
                    <div className="ml-6 w-1/2">
                        <p className="text-gray-600 mb-4">{product.subcategory}</p>
                        <p className="text-xl font-bold text-gray-900 mb-4">${product.price.toFixed(2)}</p>
                        <p className="text-gray-700 mb-4">Stock: {product.stock} available</p>

                        <div className="mb-4">
                            <label htmlFor="quantity" className="block mb-2">Quantity:</label>
                            <input
                                type="number"
                                id="quantity"
                                value={quantity}
                                onChange={handleQuantityChange}
                                min="1"
                                max={product.stock}
                                className="border px-4 py-2 rounded w-full"
                            />
                        </div>

                        <div className="flex gap-4">
                            <button
                                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                                onClick={() => addToCart({ ...product, quantity })}
                            >
                                Add to Cart
                            </button>
                            <button
                                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors"
                            >
                                Add to Wishlist
                            </button>
                        </div>

                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold mb-4">Product Reviews</h2>
                            <p className="text-gray-700">No reviews yet.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductDetails;
