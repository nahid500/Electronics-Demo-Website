// import { useParams, Link } from "react-router-dom";
// import { Card, CardContent, Typography, Grid, CardMedia } from "@mui/material";
// import a1 from '../../images/a1.jpeg';
// import a2 from '../../images/aa2.jpeg';
// import a3 from '../../images/a3.jpeg';
// import a4 from '../../images/a4.jpeg';
// import a5 from '../../images/a5.jpeg';
// import a6 from '../../images/a6.jpeg';
// import a7 from '../../images/a7.jpeg';
// import a8 from '../../images/a8.jpeg';
// import a9 from '../../images/a9.jpeg';
// import a10 from '../../images/a10.jpeg';
// import b1 from '../../images/b1.jpeg';
// import b2 from '../../images/b2.jpeg';
// import b3 from '../../images/b3.png';
// import b4 from '../../images/b4.jpeg';
// import b5 from '../../images/b5.jpeg';
// import b6 from '../../images/b6.jpeg';
// import b7 from '../../images/b7.jpeg';
// import b8 from '../../images/b8.jpeg';
// import c1 from '../../images/c1.jpeg';
// import c2 from '../../images/c2.jpeg';
// import c3 from '../../images/c3.jpeg';
// import c4 from '../../images/c4.jpeg';
// import c5 from '../../images/c5.jpeg';
// import c6 from '../../images/c6.jpeg';
// import c7 from '../../images/c7.jpeg';
// import d1 from '../../images/d1.jpeg';
// import d2 from '../../images/d2.jpeg';
// import d3 from '../../images/d3.jpeg';
// import d4 from '../../images/d4.jpeg';
// import d5 from '../../images/d5.png';
// import d6 from '../../images/d6.jpeg';
// import d7 from '../../images/d7.jpeg';
// import Navbar from '../../components/NavBar';
// import Image from '../../components/Image'
// import { useCart } from "../context/Cart/CartContext";


// const products = [
//             { id: 1, name: 'iPhone 13', subcategory: 'Phones', price: 799.99, stock: 30, image: a1 },
//             { id: 2, name: 'Samsung Galaxy S21', subcategory: 'Phones', price: 699.99, stock: 40, image: a2 },
//             { id: 3, name: 'Google Pixel 6', subcategory: 'Phones', price: 599.99, stock: 25, image: a3 },
//             { id: 4, name: 'OnePlus 9', subcategory: 'Phones', price: 729.99, stock: 35, image: a4 },
//             { id: 5, name: 'Xiaomi Mi 11', subcategory: 'Phones', price: 649.99, stock: 20, image: a5 },
//             { id: 6, name: 'Sony Xperia 5 III', subcategory: 'Phones', price: 899.99, stock: 15, image: a6 },
//             { id: 7, name: 'Nokia XR20', subcategory: 'Phones', price: 549.99, stock: 18, image: a7 },
//             { id: 8, name: 'Asus ROG Phone 5', subcategory: 'Phones', price: 999.99, stock: 10, image: a8 },
//             { id: 9, name: 'Motorola Edge 20', subcategory: 'Phones', price: 599.99, stock: 12, image: a9 },
//             { id: 10, name: 'Realme GT', subcategory: 'Phones', price: 549.99, stock: 22, image: a10 },
//             { id: 11, name: 'JBL Flip 5', subcategory: 'Headphones', price: 99.99, stock: 40, image: b1 },
//             { id: 12, name: 'Bose SoundLink', subcategory: 'Headphones', price: 129.99, stock: 35, image: b2 },
//             { id: 13, name: 'Sony SRS-XB33', subcategory: 'Headphones', price: 119.99, stock: 30, image: b3 },
//             { id: 14, name: 'Anker Soundcore 2', subcategory: 'Headphones', price: 49.99, stock: 50, image: b4 },
//             { id: 15, name: 'Ultimate Ears Boom 3', subcategory: 'Headphones', price: 149.99, stock: 20, image: b5 },
//             { id: 16, name: 'Marshall Emberton', subcategory: 'Headphones', price: 149.99, stock: 25, image: b6 },
//             { id: 17, name: 'Harman Kardon Onyx Studio 6', subcategory: 'Headphones', price: 199.99, stock: 15, image: b7 },
//             { id: 18, name: 'Tribit StormBox', subcategory: 'Headphones', price: 59.99, stock: 30, image: b8 },
//             { id: 19, name: 'Canon EOS R5', subcategory: 'Cameras', price: 3899.99, stock: 10, image: c1 },
//             { id: 20, name: 'Sony Alpha A7 III', subcategory: 'Cameras', price: 1999.99, stock: 15, image: c3 },
//             { id: 21, name: 'Nikon Z7 II', subcategory: 'Cameras', price: 2999.99, stock: 12, image: c4 },
//             { id: 22, name: 'Fujifilm X-T4', subcategory: 'Cameras', price: 1699.99, stock: 18, image: c5 },
//             { id: 23, name: 'Panasonic Lumix GH5', subcategory: 'Cameras', price: 1399.99, stock: 22, image: c6 },
//             { id: 24, name: 'Olympus OM-D E-M1 Mark III', subcategory: 'Cameras', price: 1799.99, stock: 10, image: c7 },
//             { id: 25, name: 'GoPro HERO9', subcategory: 'Cameras', price: 449.99, stock: 25, image: c2 },
//             { id: 26, name: 'Apple Watch Series 7', subcategory: 'Watches', price: 399.99, stock: 50, image: d1 },
//             { id: 27, name: 'Samsung Galaxy Watch 4', subcategory: 'Watches', price: 249.99, stock: 40, image: d2 },
//             { id: 28, name: 'Garmin Fenix 6', subcategory: 'Watches', price: 599.99, stock: 30, image: d3 },
//             { id: 29, name: 'Fitbit Versa 3', subcategory: 'Watches', price: 229.99, stock: 20, image: d4 },
//             { id: 30, name: 'Huawei Watch GT 3', subcategory: 'Watches', price: 199.99, stock: 25, image: d5 },
//             { id: 31, name: 'Amazfit GTR 3', subcategory: 'Watches', price: 179.99, stock: 35, image: d6 },
//             { id: 32, name: 'TicWatch Pro 3', subcategory: 'Watches', price: 299.99, stock: 28, image: d7 }
//         ];

        
// const Products = () => {
//     const { category } = useParams();
//     const filteredProducts = products.filter(product => product.subcategory.toLowerCase() === category.toLowerCase());

//     return (
//         <div>
//             <Navbar/>
//             <Image/>
//             <h1 className="text-3xl font-bold text-center py-5 bg-gray-100 mb-6">{category}</h1>
//             <Grid container spacing={3} justifyContent="center">
//                 {filteredProducts.length > 0 ? (
//                     filteredProducts.map(product => (
//                         <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
//                             <Card sx={{ boxShadow: 3, padding: "15px", textAlign: "center" }}>
//                                 <CardMedia component="img" height="200" image={product.image} alt={product.name} />
//                                 <CardContent>
//                                     <Typography variant="h6">{product.name}</Typography>
//                                     <Typography variant="body2" color="textSecondary">Price: ${product.price}</Typography>
//                                     <Typography variant="body2" color={product.stock > 0 ? "green" : "red"}>
//                                         {product.stock > 0 ? `In Stock (${product.stock})` : "Out of Stock"}
//                                     </Typography>
//                                 </CardContent>
//                             </Card>
//                         </Grid>
//                     ))
//                 ) : (
//                     <Typography variant="h5" color="error" className="text-center">
//                         No products available in this category.
//                     </Typography>
//                 )}
//             </Grid>
//         </div>
//     );
// };

// export default Products;


import { useParams, Link } from "react-router-dom";
import { Card, CardContent, Typography, Grid, CardMedia, Button } from "@mui/material";
import { useCart } from "../../context/Cart/CartContext";
import Navbar from '../../components/NavBar';
import Image from '../../components/Image';
import a1 from '../../images/a1.jpeg';
import a2 from '../../images/aa2.jpeg';
import a3 from '../../images/a3.jpeg';
import a4 from '../../images/a4.jpeg';
import a5 from '../../images/a5.jpeg';
import a6 from '../../images/a6.jpeg';
import a7 from '../../images/a7.jpeg';
import a8 from '../../images/a8.jpeg';
import a9 from '../../images/a9.jpeg';
import a10 from '../../images/a10.jpeg';
import b1 from '../../images/b1.jpeg';
import b2 from '../../images/b2.jpeg';
import b3 from '../../images/b3.png';
import b4 from '../../images/b4.jpeg';
import b5 from '../../images/b5.jpeg';
import b6 from '../../images/b6.jpeg';
import b7 from '../../images/b7.jpeg';
import b8 from '../../images/b8.jpeg';
import c1 from '../../images/c1.jpeg';
import c2 from '../../images/c2.jpeg';
import c3 from '../../images/c3.jpeg';
import c4 from '../../images/c4.jpeg';
import c5 from '../../images/c5.jpeg';
import c6 from '../../images/c6.jpeg';
import c7 from '../../images/c7.jpeg';
import d1 from '../../images/d1.jpeg';
import d2 from '../../images/d2.jpeg';
import d3 from '../../images/d3.jpeg';
import d4 from '../../images/d4.jpeg';
import d5 from '../../images/d5.png';
import d6 from '../../images/d6.jpeg';
import d7 from '../../images/d7.jpeg';


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

const Products = () => {
    const { category } = useParams();
    const { addToCart } = useCart();
    
    const filteredProducts = products.filter(product => product.subcategory.toLowerCase() === category.toLowerCase());

    return (
        <div>
            <Navbar />
            <Image />
            <h1 className="text-3xl font-bold text-center py-5 bg-gray-100 mb-6">{category}</h1>
            <Grid container spacing={3} justifyContent="center">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                            <Card sx={{ boxShadow: 3, padding: "15px", textAlign: "center" }}>
                                <CardMedia component="img" height="200" image={product.image} alt={product.name} />
                                <CardContent>
                                    <Typography variant="h6">{product.name}</Typography>
                                    <Typography variant="body2" color="textSecondary">Price: ${product.price}</Typography>
                                    <Typography variant="body2" color={product.stock > 0 ? "green" : "red"}>
                                        {product.stock > 0 ? `In Stock (${product.stock})` : "Out of Stock"}
                                    </Typography>
                                    <div style={{ marginTop: "10px", display: "flex", flexDirection: "column", gap: "10px" }}>
                                        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                                            <Button variant="contained" color="primary" fullWidth>
                                                View Details
                                            </Button>
                                        </Link>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            fullWidth
                                            disabled={product.stock === 0}
                                            onClick={() => addToCart(product)}
                                        >
                                            Add to Cart
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                ) : (
                    <Typography variant="h5" color="error" className="text-center">
                        No products available in this category.
                    </Typography>
                )}
            </Grid>
        </div>
    );
};

export default Products;
