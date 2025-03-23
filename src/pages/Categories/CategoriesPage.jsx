import { Card, CardContent, Typography, Grid } from "@mui/material";
import { FaClock, FaTabletAlt, FaHeadphonesAlt, FaCamera } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const categories = [
    { name: "Watches", icon: <FaClock size={40} color="#FF5722" />, path: "/products/watches" },
    { name: "Phones", icon: <FaTabletAlt size={40} color="#00BCD4" />, path: "/products/phones" },
    { name: "Headphones", icon: <FaHeadphonesAlt size={40} color="#FFC107" />, path: "/products/headphones" },
    { name: "Cameras", icon: <FaCamera size={40} color="#8E24AA" />, path: "/products/cameras" },
];

const CategoriesCard = () => {
    const navigate = useNavigate();

    return (
        <>
            <h1 className="text-3xl font-bold text-center py-5 bg-gray-100 mb-6">
                Product Categories
            </h1>
            <Grid 
                container 
                spacing={3} 
                justifyContent="center" 
                alignItems="center" 
                style={{ minHeight: "20vh", backgroundColor: "#f5f5f5", padding: "20px" }}
            >
                {categories.map((category, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Card
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "16px",
                                textAlign: "center",
                                boxShadow: 3,
                                transition: "transform 0.3s, box-shadow 0.3s",
                                cursor: "pointer",
                                maxWidth: "200px",
                                margin: "auto",
                                "&:hover": { 
                                    boxShadow: 6,
                                    transform: "scale(1.05)" // Slight scaling effect on hover
                                },
                            }}
                            onClick={() => navigate(category.path)}
                        >
                            {category.icon}
                            <CardContent>
                                <Typography variant="h6" color="textPrimary">
                                    {category.name}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default CategoriesCard;
