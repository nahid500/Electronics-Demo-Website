import { Card, CardContent, Typography, Grid } from "@mui/material";
import { FaClock, FaTabletAlt, FaBluetoothB, FaHeadphonesAlt, FaCogs } from "react-icons/fa";

const categories = [
    { name: "Smartwatches", icon: <FaClock size={40} color="#FF5722" /> },
    { name: "Tablets", icon: <FaTabletAlt size={40} color="#00BCD4" /> },
    { name: "Speakers", icon: <FaBluetoothB size={40} color="#009688" /> },
    { name: "Headsets", icon: <FaHeadphonesAlt size={40} color="#FFC107" /> },
    { name: "Accessories", icon: <FaCogs size={40} color="#8E24AA" /> },
];

const CategoriesCard = () => {
    return (
        <>
            <h1 className="text-3xl font-bold text-center py-5 bg-gray-100 mb-6">Product Categories</h1>
            <Grid container spacing={3} justifyContent="center" alignItems="center" style={{ minHeight: "20vh", backgroundColor: "#f5f5f5", padding: "20px" }}>
                {categories.map((category, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
                        <Card
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "20px",
                                textAlign: "center",
                                boxShadow: 3,
                                transition: "0.3s",
                                "&:hover": { boxShadow: 6 },
                            }}
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
