// src/pages/SupportCenter.jsx

import Navbar from '../../components/NavBar';
import PageLayout from '../../components/PageLayout';
import { Typography } from '@mui/material';

const SupportCenter = () => (
    <>
        <Navbar />
        <PageLayout>
            <Typography variant="h4" gutterBottom>
                Support Center
            </Typography>
            
            <Typography variant="body1">
                Need help? Our Support Center is here to assist you. Whether you have questions about your orders, payments, or account, our dedicated team is available 24/7 to provide the best support experience.
            </Typography>
        </PageLayout>
    </>
);

export default SupportCenter;
