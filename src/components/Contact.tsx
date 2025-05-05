import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  alpha,
  Fade,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SupportIcon from '@mui/icons-material/Support';

const Contact: React.FC = () => {
  const theme = useTheme();

  const contactInfo = [
    {
      icon: <EmailIcon />,
      primary: 'E-posta',
      secondary: 'info@ai-edu.com',
      color: theme.palette.primary.main,
    },
    {
      icon: <PhoneIcon />,
      primary: 'Telefon',
      secondary: '+90 (555) 123 45 67',
      color: theme.palette.secondary.main,
    },
    {
      icon: <LocationOnIcon />,
      primary: 'Adres',
      secondary: 'Teknoloji Vadisi, No: 123\nAnkara, Türkiye',
      color: '#4CAF50',
    },
    {
      icon: <AccessTimeIcon />,
      primary: 'Çalışma Saatleri',
      secondary: 'Pazartesi - Cuma: 09:00 - 18:00\nCumartesi: 10:00 - 14:00',
      color: '#FF9800',
    },
    {
      icon: <SupportIcon />,
      primary: 'Destek',
      secondary: '7/24 Online Destek\ndestek@ai-edu.com',
      color: '#F44336',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
      <Fade in timeout={800}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          align="center"
          sx={{
            fontWeight: 700,
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            backgroundClip: 'text',
            textFillColor: 'transparent',
            mb: 6,
          }}
        >
          İletişim
        </Typography>
      </Fade>

      <Grid container spacing={4} justifyContent="center">
        {contactInfo.map((info, index) => (
          <Grid item xs={12} sm={6} md={4} key={info.primary}>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                height: '100%',
                background: `linear-gradient(135deg, ${alpha(info.color, 0.05)}, ${alpha(
                  info.color,
                  0.15
                )})`,
                borderRadius: 4,
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: `0 8px 24px ${alpha(info.color, 0.2)}`,
                },
              }}
            >
              <List disablePadding>
                <ListItem disableGutters>
                  <ListItemIcon sx={{ color: info.color, minWidth: 40 }}>
                    {info.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        variant="h6"
                        component="h2"
                        sx={{ fontWeight: 600, color: info.color }}
                      >
                        {info.primary}
                      </Typography>
                    }
                    secondary={
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'text.secondary',
                          whiteSpace: 'pre-line',
                          mt: 1,
                          lineHeight: 1.8,
                        }}
                      >
                        {info.secondary}
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Contact;