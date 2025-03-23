
import Navbar from '../../components/NavBar';
import PageLayout from '../../components/PageLayout';
import { Typography } from '@mui/material';

const AboutUs = () => (

    <>
    <Navbar/>

    <PageLayout>
        <Typography variant="h4" gutterBottom>
        About Us
        </Typography>
        <Typography variant="body1">
        We are a leading e-commerce platform dedicated to delivering high-quality products with excellent customer service. Our mission is to make shopping seamless and enjoyable for everyone.
        </Typography>
    </PageLayout>
    </>
);

export default AboutUs;
