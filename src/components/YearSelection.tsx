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

const YearSelection: React.FC = () => {
  const navigate = useNavigate();
  const { departmentId } = useParams<{ departmentId: string }>();

  const department = universityData.find(d => d.id === departmentId);

  const handleYearSelect = (yearId: string) => {
    navigate(`/departments/${departmentId}/years/${yearId}/semesters`);
  };

  if (!department) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h5" color="error" align="center">
          Bölüm bulunamadı
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
        <Typography color="text.primary">{department.title}</Typography>
      </Breadcrumbs>

      <Typography variant="h4" component="h1" gutterBottom align="center">
        {department.title}
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" gutterBottom>
        {department.university}
      </Typography>

      <Stack direction="row" spacing={3} flexWrap="wrap" justifyContent="center" sx={{ mt: 3 }}>
        {department.years.map((year) => (
          <Box key={year.id} sx={{ width: { xs: '100%', sm: '45%', md: '22%' }, mb: 3 }}>
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
              onClick={() => handleYearSelect(year.id)}
            >
              <CardContent>
                <Box textAlign="center">
                  <Typography variant="h6" component="h2" gutterBottom>
                    {year.title}
                  </Typography>
                  <Typography color="textSecondary" variant="body2">
                    {year.semesters.length} Dönem
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

export default YearSelection;