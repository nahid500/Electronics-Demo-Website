import { useParams } from "react-router-dom";
import { useCart } from "../../context/Cart/CartContext";
import a1 from '../../images/a1.jpeg'
import a2 from '../../images/aa2.jpeg'
import a3 from '../../images/a3.jpeg'
import a4 from '../../images/a4.jpeg'
import a5 from '../../images/a5.jpeg'
import a6 from '../../images/a6.jpeg'
import a7 from '../../images/a7.jpeg'
import a8 from '../../images/a8.jpeg'
import a9 from '../../images/a9.jpeg'
import a10 from '../../images/a10.jpeg'
import b1 from '../../images/b1.jpeg'
import b2 from '../../images/b2.jpeg'
import b3 from '../../images/b3.png'
import b4 from '../../images/b4.jpeg'
import b5 from '../../images/b5.jpeg'
import b6 from '../../images/b6.jpeg'
import b7 from '../../images/b7.jpeg'
import b8 from '../../images/b8.jpeg'
import c1 from '../../images/c1.jpeg'
import c2 from '../../images/c2.jpeg'
import c3 from '../../images/c3.jpeg'
import c4 from '../../images/c4.jpeg'
import c5 from '../../images/c5.jpeg'
import c6 from '../../images/c6.jpeg'
import c7 from '../../images/c7.jpeg'
import d1 from '../../images/d1.jpeg'
import d2 from '../../images/d2.jpeg'
import d3 from '../../images/d3.jpeg'
import d4 from '../../images/d4.jpeg'
import d5 from '../../images/d5.png'
import d6 from '../../images/d6.jpeg'
import d7 from '../../images/d7.jpeg'
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Image from "../../components/Image";


const products = [
    { id: 1, name: 'iPhone 13', subcategory: 'Phones', price: 799.99, stock: 30, image: a1 },
    { id: 2, name: 'Samsung Galaxy S21', subcategory: 'Phones', price: 699.99, stock: 40, image: a2 },
    { id: 3, name: 'Google Pixel 6', subcategory: 'Phones', price: 599.99, stock: 25, image: a3 },
    { id: 4, name: 'OnePlus 9', subcategory: 'Phones', price: 729.99, stock: 35, image: a4 },
    { id: 5, name: 'Xiaomi Mi 11', subcategory: 'Phones', price: 649.99, stock: 20, image: a5 },
    { id: 6, name: 'Sony Xperia 5 III', subcategory: 'Phones', price: 899.99, stock: 15, image: a6 },
    { id: 7, name: 'Nokia XR20', subcategory: 'Phones', price: 549.99, stock: 18, image: a7 },
    { id: 8, name: 'Asus ROG Phone 5', subcategory: 'Phones', price: 999.99, stock: 10, image: a8 },
    { id: 9, name: 'Motorola Edge 20', subcategory: 'Phones', price: 599.99, stock: 12, image: a9 },
    { id: 10, name: 'Realme GT', subcategory: 'Phones', price: 549.99, stock: 22, image: a10 },
    { id: 11, name: 'JBL Flip 5', subcategory: 'Headphones', price: 99.99, stock: 40, image: b1 },
    { id: 12, name: 'Bose SoundLink', subcategory: 'Headphones', price: 129.99, stock: 35, image: b2 },
    { id: 13, name: 'Sony SRS-XB33', subcategory: 'Headphones', price: 119.99, stock: 30, image: b3 },
    { id: 14, name: 'Anker Soundcore 2', subcategory: 'Headphones', price: 49.99, stock: 50, image: b4 },
    { id: 15, name: 'Ultimate Ears Boom 3', subcategory: 'Headphones', price: 149.99, stock: 20, image: b5 },
    { id: 16, name: 'Marshall Emberton', subcategory: 'Headphones', price: 149.99, stock: 25, image: b6 },
    { id: 17, name: 'Harman Kardon Onyx Studio 6', subcategory: 'Headphones', price: 199.99, stock: 15, image: b7 },
    { id: 18, name: 'Tribit StormBox', subcategory: 'Headphones', price: 59.99, stock: 30, image: b8 },
    { id: 19, name: 'Canon EOS R5', subcategory: 'Cameras', price: 3899.99, stock: 10, image: c1 },
    { id: 20, name: 'Sony Alpha A7 III', subcategory: 'Cameras', price: 1999.99, stock: 15, image: c3 },
    { id: 21, name: 'Nikon Z7 II', subcategory: 'Cameras', price: 2999.99, stock: 12, image: c4 },
    { id: 22, name: 'Fujifilm X-T4', subcategory: 'Cameras', price: 1699.99, stock: 18, image: c5 },
    { id: 23, name: 'Panasonic Lumix GH5', subcategory: 'Cameras', price: 1399.99, stock: 22, image: c6 },
    { id: 24, name: 'Olympus OM-D E-M1 Mark III', subcategory: 'Cameras', price: 1799.99, stock: 10, image: c7 },
    { id: 25, name: 'GoPro HERO9', subcategory: 'Cameras', price: 449.99, stock: 25, image: c2 },
    { id: 26, name: 'Apple Watch Series 7', subcategory: 'Watches', price: 399.99, stock: 50, image: d1 },
    { id: 27, name: 'Samsung Galaxy Watch 4', subcategory: 'Watches', price: 249.99, stock: 40, image: d2 },
    { id: 28, name: 'Garmin Fenix 6', subcategory: 'Watches', price: 599.99, stock: 30, image: d3 },
    { id: 29, name: 'Fitbit Versa 3', subcategory: 'Watches', price: 229.99, stock: 20, image: d4 },
    { id: 30, name: 'Huawei Watch GT 3', subcategory: 'Watches', price: 199.99, stock: 25, image: d5 },
    { id: 31, name: 'Amazfit GTR 3', subcategory: 'Watches', price: 179.99, stock: 35, image: d6 },
    { id: 32, name: 'TicWatch Pro 3', subcategory: 'Watches', price: 299.99, stock: 28, image: d7 }
];

const ProductDetails = () => {
    const { id } = useParams();
    console.log(id);  // Add this to see the id in the console

    const { addToCart } = useCart();
    const product = products.find((p) => p.id === parseInt(id));




    if (!product) {
        return <h2 className="text-center text-2xl text-red-500">Product Not Found</h2>;
    }

    return (

        <>
        <Navbar/>
        <Image/>
        
        <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <img src={product.image} alt={product.name} className="w-full rounded-lg shadow-lg" />
                
                <div>
                    <h2 className="text-3xl font-bold">{product.name}</h2>
                    <p className="text-gray-600 text-lg mt-2">{product.description}</p>
                    <p className="text-lg font-semibold mt-4">Price: ${product.price.toFixed(2)}</p>
                    <p className="text-md text-gray-700">Stock Available: {product.stock}</p>
                    <p className="text-lg mt-2">⭐⭐⭐⭐ {product.rating}</p>

                    <button
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors mt-4"
                        onClick={() => addToCart(product)}
                        >
                        Add to Cart
                    </button>

                    <h3 className="text-2xl font-bold mt-6">Customer Reviews</h3>
                    <ul className="mt-2">
                    {[
                        "This is an amazing product!",
                        "I love this! Totally worth the price.",
                        "Great value for money, highly recommended.",
                    ].length > 0 ? (
                        [
                        "This is an amazing product!",
                        "I love this! Totally worth the price.",
                        "Great value for money, highly recommended.",
                        ].map((review, index) => (
                        <li key={index} className="bg-gray-100 p-3 my-2 rounded-md">{review}</li>
                        ))
                    ) : (
                        <p>No reviews yet</p>
                    )}
                    </ul>

                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default ProductDetails;
