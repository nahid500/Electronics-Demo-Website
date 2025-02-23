import { useCart } from "../../context/Cart/CartContext";
import { Link } from "react-router-dom";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import image from '../../images/p1.jpeg';
import Image from "../../components/Image";

const Products = () => {
    const { addToCart } = useCart();

    const products = [
        { id: 1, name: 'Wireless Headphones', category: 'Electronics', price: 59.99, stock: 120 },
        { id: 2, name: 'LED Desk Lamp', category: 'Furniture', price: 19.99, stock: 85 },
        { id: 3, name: 'Smart Watch', category: 'Electronics', price: 149.99, stock: 200 },
        { id: 4, name: 'Bluetooth Speaker', category: 'Electronics', price: 39.99, stock: 50 },
        { id: 5, name: 'Portable Charger', category: 'Electronics', price: 29.99, stock: 75 },
        { id: 6, name: 'Yoga Mat', category: 'Fitness', price: 15.99, stock: 150 },
        { id: 7, name: 'Leather Wallet', category: 'Accessories', price: 25.99, stock: 60 },
        { id: 8, name: 'Running Shoes', category: 'Footwear', price: 69.99, stock: 90 },
        { id: 9, name: 'Coffee Maker', category: 'Appliances', price: 99.99, stock: 40 },
        { id: 10, name: 'Electric Kettle', category: 'Appliances', price: 39.99, stock: 30 },
        { id: 11, name: 'Smartphone Case', category: 'Accessories', price: 12.99, stock: 200 },
        { id: 12, name: 'Gaming Mouse', category: 'Electronics', price: 49.99, stock: 110 },
        { id: 13, name: 'Sunglasses', category: 'Accessories', price: 19.99, stock: 180 },
        { id: 14, name: 'Wristwatch', category: 'Accessories', price: 99.99, stock: 150 },
        { id: 15, name: 'Digital Camera', category: 'Electronics', price: 299.99, stock: 20 }
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

            <Image/>
            
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
                                        <button
                                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                                            onClick={() => addToCart(product)}
                                        >
                                            Add to Cart
                                        </button>
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
        </>
    );
};

export default Products;
