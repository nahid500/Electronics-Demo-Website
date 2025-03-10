// src/pages/PrivacyPolicy.jsx

import Navbar from '../../components/NavBar';
import PageLayout from '../../components/PageLayout';
import { Typography } from '@mui/material';

const PrivacyPolicy = () => (

    <>
    <Navbar/>

    <PageLayout>
        <Typography variant="h4" gutterBottom>
        Privacy Policy
        </Typography>
        <Typography variant="body1">
        Your privacy is important to us. Here’s how we handle and protect your personal information.
        </Typography>
        <Typography variant="body1" mt={2}>
        We only collect personal data necessary to provide you with a seamless shopping experience. We never share your data with third parties unless required by law.
        </Typography>
    </PageLayout>
    </>
);

export default PrivacyPolicy;
