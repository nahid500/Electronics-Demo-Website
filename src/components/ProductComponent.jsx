import image from '../images/p1.jpeg'



const ProductComponent = () => {
    const products = [
        { id: 1, name: 'Wireless Headphones', category: 'Electronics', price: 59.99, stock: 120, image: 'https://via.placeholder.com/200x200.png?text=Wireless+Headphones' },
        { id: 3, name: 'Smart Watch', category: 'Electronics', price: 149.99, stock: 200, image: 'https://via.placeholder.com/200x200.png?text=Smart+Watch' },
        { id: 4, name: 'Bluetooth Speaker', category: 'Electronics', price: 39.99, stock: 50, image: 'https://via.placeholder.com/200x200.png?text=Bluetooth+Speaker' },
        { id: 5, name: 'Portable Charger', category: 'Electronics', price: 29.99, stock: 75, image: 'https://via.placeholder.com/200x200.png?text=Portable+Charger' },
        { id: 7, name: 'Leather Wallet', category: 'Accessories', price: 25.99, stock: 60, image: 'https://via.placeholder.com/200x200.png?text=Leather+Wallet' },
        { id: 11, name: 'Smartphone Case', category: 'Accessories', price: 12.99, stock: 200, image: 'https://via.placeholder.com/200x200.png?text=Smartphone+Case' },
        { id: 12, name: 'Gaming Mouse', category: 'Electronics', price: 49.99, stock: 110, image: 'https://via.placeholder.com/200x200.png?text=Gaming+Mouse' },
        { id: 13, name: 'Sunglasses', category: 'Accessories', price: 19.99, stock: 180, image: 'https://via.placeholder.com/200x200.png?text=Sunglasses' },
        { id: 14, name: 'Wristwatch', category: 'Accessories', price: 99.99, stock: 150, image: 'https://via.placeholder.com/200x200.png?text=Wristwatch' },
        { id: 15, name: 'Digital Camera', category: 'Electronics', price: 299.99, stock: 20, image: 'https://via.placeholder.com/200x200.png?text=Digital+Camera' }
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
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-center mb-6">Best Selling Products</h1>

            {Object.keys(groupedProducts).map((category, index) => (
                <div key={index} className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">{category}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {groupedProducts[category].map((product) => (
                            <div
                                key={product.id}
                                className="max-w-sm rounded overflow-hidden shadow-lg bg-white"
                            >
                                {/* Display the product image */}
                                <img
                                    src={image}
                                    alt={product.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="px-6 py-4">
                                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                                    <p className="text-gray-600">Price: ${product.price.toFixed(2)}</p>
                                    <p className="text-gray-600">Stock: {product.stock}</p>
                                </div>
                                <div className="px-6 py-4">
                                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductComponent;
