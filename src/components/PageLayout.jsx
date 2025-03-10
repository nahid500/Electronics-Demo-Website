
import { Container, Paper } from '@mui/material';

const PageLayout = ({ children }) => (
    <Container maxWidth="lg" sx={{ paddingTop: 4 }}>
        <Paper sx={{ padding: 3, boxShadow: 3 }}>
        {children}
        </Paper>
    </Container>
);

export default PageLayout;
