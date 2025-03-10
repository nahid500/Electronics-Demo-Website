// src/pages/TermsConditions.jsx

import Navbar from '../../components/NavBar';
import PageLayout from '../../components/PageLayout';
import { Typography } from '@mui/material';

const TermsConditions = () => (
    <>
    <Navbar/>
    <PageLayout>
        <Typography variant="h4" gutterBottom>
        Terms & Conditions
        </Typography>
        <Typography variant="body1">
        Please read these terms and conditions carefully before using our website or services.
        </Typography>
        <Typography variant="body1" mt={2}>
        By accessing or using our services, you agree to be bound by these terms. If you do not agree to these terms, you should not use our services.
        </Typography>
    </PageLayout>
    </>
    );

export default TermsConditions;
