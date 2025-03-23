
import Navbar from '../../components/NavBar';
import PageLayout from '../../components/PageLayout';
import { Typography } from '@mui/material';

const Refund = () => (
    <>
        <Navbar />
        <PageLayout>
            <Typography variant="h4" gutterBottom>
                Cancellation, Return & Refund Policy
            </Typography>
            <Typography variant="body1">
                We strive to provide a hassle-free shopping experience. If you need to cancel an order, return a product, or request a refund, please review our policies below:
            </Typography>
            <Typography variant="body2" paragraph>
                <strong>Cancellation:</strong> Orders can be canceled before they are shipped. Once shipped, cancellations are not possible.
            </Typography>
            <Typography variant="body2" paragraph>
                <strong>Returns:</strong> You can return items within 14 days of delivery if they meet our return eligibility criteria.
            </Typography>
            <Typography variant="body2" paragraph>
                <strong>Refunds:</strong> Refunds are processed within 7 business days after the returned product passes quality checks.
            </Typography>
            <Typography variant="body1">
                For more details, please contact our support team.
            </Typography>
        </PageLayout>
    </>
);

export default Refund;
