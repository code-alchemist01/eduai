import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Container,
  Stack,
} from '@mui/material';

interface EducationLevel {
  id: string;
  title: string;
  grades: string;
}

const educationLevels: EducationLevel[] = [
  { id: 'primary', title: 'İlkokul', grades: '1-4' },
  { id: 'middle', title: 'Ortaokul', grades: '5-8' },
  { id: 'high', title: 'Lise', grades: '9-12' },
  { id: 'university', title: 'Üniversite', grades: 'Lisans' },
];

const LevelSelection: React.FC = () => {
  const navigate = useNavigate();

  const handleLevelSelect = (levelId: string) => {
    if (levelId === 'university') {
      navigate(`/departments`);
    } else {
      navigate(`/grades/${levelId}`);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Eğitim Seviyenizi Seçin
      </Typography>
      <Stack direction="row" spacing={3} flexWrap="wrap" justifyContent="center" sx={{ mt: 3 }}>
        {educationLevels.map((level) => (
          <Box key={level.id} sx={{ width: { xs: '100%', sm: '45%', md: '22%' }, mb: 3 }}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'transform 0.2s ease-in-out',
                },
              }}
              onClick={() => handleLevelSelect(level.id)}
            >
              <CardContent>
                <Box textAlign="center">
                  <Typography variant="h5" component="h2" gutterBottom>
                    {level.title}
                  </Typography>
                  <Typography color="textSecondary">
                    {level.grades}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Stack>
    </Container>
  );
};

export default LevelSelection;