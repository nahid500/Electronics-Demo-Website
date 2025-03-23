// src/pages/PaymentMethods.jsx

import Navbar from '../../components/NavBar';
import PageLayout from '../../components/PageLayout';
import { Typography } from '@mui/material';

const PaymentMethods = () => (
    <>
        <Navbar />
        <PageLayout>
            <Typography variant="h4" gutterBottom>
                Payment Methods
            </Typography>
            <Typography variant="body1">
                We offer a variety of secure payment methods to ensure a smooth and safe shopping experience. You can pay using credit/debit cards, PayPal, digital wallets, and other trusted payment gateways.
            </Typography>
        </PageLayout>
    </>
);

export default PaymentMethods;
