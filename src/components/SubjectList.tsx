import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  useTheme,
  alpha,
  Grow,
  Fade,
} from '@mui/material';
import { motion } from 'framer-motion';

const SubjectList: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const levels = [
    { id: 'primary', title: 'İlkokul', color: '#4CAF50', icon: '🎓' },
    { id: 'middle', title: 'Ortaokul', color: '#2196F3', icon: '📚' },
    { id: 'high', title: 'Lise', color: '#F44336', icon: '🎯' },
  ];

  const handleLevelSelect = (id: string) => {
    navigate(`/subjects/${id}`);
  };

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
            mb: 6
          }}
        >
          Eğitim Seviyeleri
        </Typography>
      </Fade>

      <Grid container spacing={4} justifyContent="center">
        {levels.map((level, index) => (
          <Grid item xs={12} sm={6} md={4} key={level.id}>
            <Grow in timeout={600 + index * 200}>
              <Card
                component={motion.div}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                sx={{
                  height: '100%',
                  cursor: 'pointer',
                  background: `linear-gradient(135deg, ${alpha(level.color, 0.1)}, ${alpha(level.color, 0.2)})`,
                  borderRadius: 4,
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    boxShadow: `0 8px 24px ${alpha(level.color, 0.2)}`,
                  },
                }}
                onClick={() => handleLevelSelect(level.id)}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 2,
                    }}
                  >
                    <Typography
                      variant="h1"
                      sx={{
                        fontSize: '4rem',
                        color: level.color,
                        textShadow: `2px 2px 4px ${alpha(level.color, 0.3)}`,
                      }}
                    >
                      {level.icon}
                    </Typography>
                    <Typography
                      variant="h4"
                      component="h2"
                      align="center"
                      sx={{
                        fontWeight: 600,
                        color: level.color,
                      }}
                    >
                      {level.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      align="center"
                      sx={{ mt: 1 }}
                    >
                      4 sınıf seviyesi
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grow>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SubjectList;