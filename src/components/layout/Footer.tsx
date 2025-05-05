import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Link,
  IconButton,
  useTheme,
  Divider,
  Stack,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BookIcon from '@mui/icons-material/Book';

const Footer: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const quickLinks = [
    { text: 'Ana Sayfa', path: '/' },
    { text: 'Hakkımızda', path: '/about' },
    { text: 'İletişim', path: '/contact' },
    { text: 'Gizlilik Politikası', path: '/privacy' },
    { text: 'Kullanım Şartları', path: '/terms' },
  ];

  const educationLinks = [
    { text: 'İlkokul', path: '/subjects/primary' },
    { text: 'Ortaokul', path: '/subjects/middle' },
    { text: 'Lise', path: '/subjects/high' },
  ];

  const socialLinks = [
    { icon: <FacebookIcon />, url: 'https://facebook.com' },
    { icon: <TwitterIcon />, url: 'https://twitter.com' },
    { icon: <InstagramIcon />, url: 'https://instagram.com' },
    { icon: <LinkedInIcon />, url: 'https://linkedin.com' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        py: 6,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {/* Logo ve Açıklama */}
          <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 40%' } }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 2,
                cursor: 'pointer',
              }}
              onClick={() => navigate('/')}
            >
              <BookIcon
                sx={{
                  color: 'primary.main',
                  fontSize: 32,
                  mr: 1,
                }}
              />
              <Typography
                variant="h6"
                noWrap
                sx={{
                  fontWeight: 'bold',
                  color: 'primary.main',
                }}
              >
                AI-EDU
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" paragraph>
              AI-EDU, yapay zeka destekli eğitim platformu ile öğrencilere kişiselleştirilmiş
              öğrenme deneyimi sunar. Modern eğitim teknolojileri ile geleneksel eğitimi
              birleştirerek geleceğin eğitim standardını oluşturuyoruz.
            </Typography>
            <Box sx={{ mt: 2 }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'primary.main',
                    '&:hover': {
                      color: 'primary.dark',
                    },
                    mr: 1,
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Box>

          {/* Hızlı Bağlantılar */}
          <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 25%' } }}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Hızlı Bağlantılar
            </Typography>
            <Stack spacing={1}>
              {quickLinks.map((link) => (
                <Link
                  key={link.text}
                  component="button"
                  variant="body2"
                  onClick={() => navigate(link.path)}
                  sx={{
                    color: 'text.secondary',
                    textAlign: 'left',
                    textDecoration: 'none',
                    '&:hover': {
                      color: 'primary.main',
                      textDecoration: 'none',
                    },
                  }}
                >
                  {link.text}
                </Link>
              ))}
            </Stack>
          </Box>

          {/* Eğitim Seviyeleri */}
          <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 25%' } }}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Eğitim Seviyeleri
            </Typography>
            <Stack spacing={1}>
              {educationLinks.map((link) => (
                <Link
                  key={link.text}
                  component="button"
                  variant="body2"
                  onClick={() => navigate(link.path)}
                  sx={{
                    color: 'text.secondary',
                    textAlign: 'left',
                    textDecoration: 'none',
                    '&:hover': {
                      color: 'primary.main',
                      textDecoration: 'none',
                    },
                  }}
                >
                  {link.text}
                </Link>
              ))}
            </Stack>
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Telif Hakkı */}
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ pt: 2 }}
        >
          © {new Date().getFullYear()} AI-EDU. Tüm hakları saklıdır.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;