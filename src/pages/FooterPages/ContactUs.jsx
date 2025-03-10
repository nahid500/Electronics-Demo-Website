// src/pages/ContactUs.jsx

import Navbar from '../../components/NavBar';
import PageLayout from '../../components/PageLayout';
import { Typography, TextField, Button } from '@mui/material';

const ContactUs = () => (

    <>
    <Navbar/>

    <PageLayout>
        <Typography variant="h4" gutterBottom>
        Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
        We would love to hear from you. Please fill out the form below and we will get back to you as soon as possible.
        </Typography>
        <form noValidate>
        <TextField label="Your Name" fullWidth margin="normal" />
        <TextField label="Email Address" type="email" fullWidth margin="normal" />
        <TextField label="Message" fullWidth multiline rows={4} margin="normal" />
        <Button variant="contained" color="primary" type="submit">
            Submit
        </Button>
        </form>
    </PageLayout>
    </>
);

export default ContactUs;
