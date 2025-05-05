import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Breadcrumbs,
  Link,
  Grid,
  useTheme,
  alpha,
  Grow,
  Fade,
} from '@mui/material';
import { motion } from 'framer-motion';
import { primarySchoolData } from '../data/primarySchoolData';
import { middleSchoolData } from '../data/middleSchoolData';
import { highSchoolData } from '../data/highSchoolData';

const TopicSelection: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { levelId, gradeId, subjectId } = useParams<{
    levelId: string;
    gradeId: string;
    subjectId: string;
  }>();

  const getLevelData = () => {
    switch (levelId) {
      case 'primary':
        return { data: primarySchoolData, title: 'İlkokul', color: '#4CAF50' };
      case 'middle':
        return { data: middleSchoolData, title: 'Ortaokul', color: '#2196F3' };
      case 'high':
        return { data: highSchoolData, title: 'Lise', color: '#F44336' };
      default:
        return null;
    }
  };

  const levelInfo = getLevelData();
  const grade = levelInfo?.data.find((g) => g.id === gradeId);
  const subject = grade?.subjects.find((s) => s.id === subjectId);

  if (!levelInfo || !grade || !subject) {
    return (
      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <Typography variant="h4" color="error" align="center">
          Ders bulunamadı
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
      <Breadcrumbs sx={{ mb: 4 }}>
        <Link
          component="button"
          variant="body1"
          onClick={() => navigate('/')}
          sx={{
            color: 'text.secondary',
            textDecoration: 'none',
            '&:hover': { color: 'primary.main' },
          }}
        >
          Ana Sayfa
        </Link>
        <Link
          component="button"
          variant="body1"
          onClick={() => navigate(`/subjects/${levelId}`)}
          sx={{
            color: 'text.secondary',
            textDecoration: 'none',
            '&:hover': { color: 'primary.main' },
          }}
        >
          {levelInfo.title}
        </Link>
        <Link
          component="button"
          variant="body1"
          onClick={() => navigate(`/subjects/${levelId}/${gradeId}`)}
          sx={{
            color: 'text.secondary',
            textDecoration: 'none',
            '&:hover': { color: 'primary.main' },
          }}
        >
          {grade.title}
        </Link>
        <Typography color="text.primary" sx={{ fontWeight: 500 }}>
          {subject.title}
        </Typography>
      </Breadcrumbs>

      <Fade in timeout={800}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          align="center"
          sx={{
            fontWeight: 700,
            background: `linear-gradient(45deg, ${levelInfo.color}, ${alpha(levelInfo.color, 0.6)})`,
            backgroundClip: 'text',
            textFillColor: 'transparent',
            mb: 6,
          }}
        >
          {subject.title} Konuları
        </Typography>
      </Fade>

      <Grid container spacing={4} justifyContent="center">
        {subject.units.map((unit, index) => (
          <Grid item xs={12} sm={6} md={4} key={unit.id}>
            <Grow in timeout={600 + index * 200}>
              <Card
                component={motion.div}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                sx={{
                  height: '100%',
                  cursor: 'pointer',
                  background: `linear-gradient(135deg, ${alpha(levelInfo.color, 0.05)}, ${alpha(
                    levelInfo.color,
                    0.15
                  )})`,
                  borderRadius: 4,
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    boxShadow: `0 8px 24px ${alpha(levelInfo.color, 0.2)}`,
                  },
                }}
                onClick={() =>
                  navigate(`/subjects/${levelId}/${gradeId}/${subjectId}/${unit.id}`)
                }
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
                      variant="h2"
                      sx={{
                        fontSize: '3rem',
                        color: levelInfo.color,
                        textShadow: `2px 2px 4px ${alpha(levelInfo.color, 0.3)}`,
                      }}
                    >
                      📝
                    </Typography>
                    <Typography
                      variant="h5"
                      component="h2"
                      align="center"
                      sx={{
                        fontWeight: 600,
                        color: levelInfo.color,
                      }}
                    >
                      {unit.title}
                    </Typography>
                    {unit.topics && (
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        align="center"
                        sx={{ mt: 1 }}
                      >
                        {unit.topics.length} alt konu
                      </Typography>
                    )}
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

export default TopicSelection;