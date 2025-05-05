import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Container,
  Stack,
  Breadcrumbs,
  Link,
} from '@mui/material';
import { universityData } from '../data/universityData';

const SemesterSelection: React.FC = () => {
  const navigate = useNavigate();
  const { departmentId, yearId } = useParams<{ departmentId: string; yearId: string }>();

  const department = universityData.find(d => d.id === departmentId);
  const year = department?.years.find(y => y.id === yearId);

  const handleSemesterSelect = (semesterId: string) => {
    navigate(`/departments/${departmentId}/years/${yearId}/semesters/${semesterId}/courses`);
  };

  if (!department || !year) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h5" color="error" align="center">
          Bölüm veya yıl bulunamadı
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Breadcrumbs sx={{ mb: 3 }}>
        <Link
          component="button"
          variant="body1"
          onClick={() => navigate('/')}
          sx={{ cursor: 'pointer' }}
        >
          Ana Sayfa
        </Link>
        <Link
          component="button"
          variant="body1"
          onClick={() => navigate('/departments')}
          sx={{ cursor: 'pointer' }}
        >
          Bölümler
        </Link>
        <Link
          component="button"
          variant="body1"
          onClick={() => navigate(`/departments/${departmentId}/years`)}
          sx={{ cursor: 'pointer' }}
        >
          {department.title}
        </Link>
        <Typography color="text.primary">{year.title}</Typography>
      </Breadcrumbs>

      <Typography variant="h4" component="h1" gutterBottom align="center">
        {year.title} - Dönemler
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" gutterBottom>
        {department.title} - {department.university}
      </Typography>

      <Stack direction="row" spacing={3} flexWrap="wrap" justifyContent="center" sx={{ mt: 3 }}>
        {year.semesters.map((semester) => (
          <Box key={semester.id} sx={{ width: { xs: '100%', sm: '45%' }, mb: 3 }}>
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
              onClick={() => handleSemesterSelect(semester.id)}
            >
              <CardContent>
                <Box textAlign="center">
                  <Typography variant="h6" component="h2" gutterBottom>
                    {semester.title}
                  </Typography>
                  <Typography color="textSecondary" variant="body2">
                    {semester.courses.length} Ders
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

export default SemesterSelection;