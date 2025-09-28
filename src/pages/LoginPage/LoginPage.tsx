import { NavLink } from 'react-router-dom';
import { Container, Paper, Typography, Button, Box } from '@mui/material';

export function LoginPage() {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Login Page
        </Typography>
        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Button 
            component={NavLink} 
            to="/" 
            variant="contained" 
            color="primary"
            size="large"
          >
            Go to Home
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
