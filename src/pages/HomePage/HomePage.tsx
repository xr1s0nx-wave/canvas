import { NavLink } from 'react-router-dom';
import { Container, Paper, Typography, Button, Grid } from '@mui/material';
import { ROUTES } from '@/shared/config';

export function HomePage() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center" color="primary">
          Welcome to My App
        </Typography>
        <Typography variant="h6" component="p" align="center" color="text.secondary" sx={{ mb: 4 }}>
          This is the home page with custom Material-UI theme colors
        </Typography>
        
        <Grid container spacing={3} justifyContent="center">
          <Grid component="div" item>
            <Button 
              component={NavLink} 
              to={ROUTES.LOGIN} 
              variant="contained" 
              color="primary"
              size="large"
            >
              Go to Login
            </Button>
          </Grid>
          <Grid component="div" item>
            <Button 
              variant="outlined" 
              color="secondary"
              size="large"
              onClick={() => window.location.reload()}
            >
              Reload Page
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
