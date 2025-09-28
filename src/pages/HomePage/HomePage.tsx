import { NavLink } from 'react-router-dom';
import { Container, Paper, Typography, Button, Grid, Card, CardContent, Box } from '@mui/material';
import { ROUTES } from '@/shared/config';
import { useTheme } from '@/shared/lib';

export function HomePage() {
  const { mode } = useTheme();

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center" color="primary">
          Welcome to My App
        </Typography>
        <Typography variant="h6" component="p" align="center" color="text.secondary" sx={{ mb: 4 }}>
          This is the home page with dynamic theme switching
        </Typography>
        
        <Grid container spacing={3} justifyContent="center">
          <Grid component="div">
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
          <Grid component="div">
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

      <Grid container spacing={3}>
        <Grid component="div">
          <Card elevation={2}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom color="primary">
                Current Theme
              </Typography>
              <Typography variant="body1" color="text.secondary">
                You are currently using the <strong>{mode}</strong> theme.
              </Typography>
              <Box sx={{ mt: 2, p: 2, bgcolor: 'background.paper', borderRadius: 1, border: 1, borderColor: 'divider' }}>
                <Typography variant="body2" color="text.primary">
                  This card demonstrates how the theme affects different UI elements.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid component="div">
          <Card elevation={2}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom color="secondary">
                Theme Features
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                The theme system includes:
              </Typography>
              <Box component="ul" sx={{ pl: 2, m: 0 }}>
                <Typography component="li" variant="body2" color="text.primary">
                  Automatic system theme detection
                </Typography>
                <Typography component="li" variant="body2" color="text.primary">
                  Persistent theme preference
                </Typography>
                <Typography component="li" variant="body2" color="text.primary">
                  Smooth transitions between themes
                </Typography>
                <Typography component="li" variant="body2" color="text.primary">
                  Material-UI integration
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
