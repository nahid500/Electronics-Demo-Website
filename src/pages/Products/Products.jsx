import { useState } from "react";
import { useCart } from "../../context/Cart/CartContext";
import { Link } from "react-router-dom";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import image from '../../images/p1.jpeg';
import Image from "../../components/Image";

const Products = () => {
    const { addToCart } = useCart();
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = [
        { id: 1, name: 'Wireless Headphones', category: 'Electronics', price: 59.99, stock: 120 },
        { id: 2, name: 'LED Desk Lamp', category: 'Furniture', price: 19.99, stock: 85 },
        { id: 3, name: 'Smart Watch', category: 'Electronics', price: 149.99, stock: 200 },
        { id: 4, name: 'Bluetooth Speaker', category: 'Electronics', price: 39.99, stock: 50 }
    ];

    // Group products by category
    const groupedProducts = products.reduce((acc, product) => {
        if (!acc[product.category]) {
            acc[product.category] = [];
        }
        acc[product.category].push(product);
        return acc;
    }, {});

    return (
        <>
            <Navbar />

            <Image />

            <div className="container mx-auto px-4 py-6">
                <h1 className="text-3xl font-bold text-center mb-6">Products</h1>

                {Object.keys(groupedProducts).map((category) => (
                    <div key={category} className="mb-8">
                        <h2 className="text-2xl font-bold mb-4 border-b-2 pb-2">{category}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {groupedProducts[category].map((product) => (
                                <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                                    <img src={image} alt={product.name} className="w-full h-48 object-cover" />
                                    <div className="px-6 py-4">
                                        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                                        <p className="text-gray-600">Price: ${product.price.toFixed(2)}</p>

                                        {/* Buttons: Add to Cart & View Details */}
                                        <div className="mt-4 flex flex-col gap-2">
                                            <button
                                                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors w-full"
                                                onClick={() => addToCart(product)}
                                            >
                                                Add to Cart
                                            </button>
                                            <button
                                                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors w-full"
                                                onClick={() => setSelectedProduct(product)}
                                            >
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Cart Link */}
                <div className="text-center mt-8">
                    <Link to="/cart" className="text-blue-500 text-lg font-bold">
                        🛒 View Cart
                    </Link>
                </div>
            </div>

            <Footer />

            {/* Product Details Modal */}
            {selectedProduct && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h2 className="text-2xl font-bold mb-4">{selectedProduct.name}</h2>
                        <img src={image} alt={selectedProduct.name} className="w-full h-48 object-cover mb-4" />
                        <p className="text-gray-700 mb-2"><strong>Category:</strong> {selectedProduct.category}</p>
                        <p className="text-gray-700 mb-2"><strong>Price:</strong> ${selectedProduct.price.toFixed(2)}</p>
                        <p className="text-gray-700 mb-4"><strong>Stock:</strong> {selectedProduct.stock} available</p>

                        {/* Details Section */}
                        <div className="border-t pt-4">
                            <h3 className="text-lg font-semibold mb-2">Details:</h3>
                            <p className="text-gray-600 text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit ex vel libero 
                                eleifend, non feugiat dolor tincidunt. Integer ut odio nec augue ullamcorper tempus.
                            </p>
                        </div>

                        {/* Add to Cart & Close Buttons */}
                        <button
                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors w-full mt-4"
                            onClick={() => {
                                addToCart(selectedProduct);
                                setSelectedProduct(null);
                            }}
                        >
                            Add to Cart
                        </button>

                        <button
                            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors w-full mt-2"
                            onClick={() => setSelectedProduct(null)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Products;
