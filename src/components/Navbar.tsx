import { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import { useNavigate } from 'react-router-dom';

const pages = [
  { title: 'Home', path: '/' },
  { title: 'Services', path: '/services' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
  { title: 'Feedback', path: '/feedback' },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', boxShadow: 'none' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Desktop Logo */}
          <CleaningServicesIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: '#1479bc' }} />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: '#1479bc',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/')}
          >
            Point Cleaning
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setMobileMenuOpen(true)}
              color="inherit"
              sx={{ color: '#1479bc' }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={mobileMenuOpen}
              onClose={() => setMobileMenuOpen(false)}
            >
              <Box sx={{ width: 250 }} role="presentation">
                <List>
                  {pages.map((page) => (
                    <ListItem 
                      key={page.title} 
                      onClick={() => {
                        navigate(page.path);
                        setMobileMenuOpen(false);
                      }}
                      sx={{ 
                        cursor: 'pointer',
                        '&:hover': {
                          backgroundColor: 'rgba(20, 121, 188, 0.1)',
                        },
                      }}
                    >
                      <ListItemText 
                        primary={page.title}
                        sx={{ 
                          color: '#1479bc',
                          '.MuiTypography-root': {
                            fontWeight: 500,
                          },
                        }} 
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </Box>

          {/* Mobile Logo */}
          <CleaningServicesIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: '#1479bc' }} />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              color: '#1479bc',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/')}
          >
            Point Cleaning
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={() => navigate(page.path)}
                sx={{
                  my: 2,
                  mx: 1,
                  color: '#1479bc',
                  display: 'block',
                  fontWeight: 500,
                  '&:hover': {
                    backgroundColor: 'rgba(20, 121, 188, 0.1)',
                  },
                }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
