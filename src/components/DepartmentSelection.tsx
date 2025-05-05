import React from 'react';
import { useNavigate } from 'react-router-dom';
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

const DepartmentSelection: React.FC = () => {
  const navigate = useNavigate();

  const handleDepartmentSelect = (departmentId: string) => {
    navigate(`/departments/${departmentId}/years`);
  };

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
        <Typography color="text.primary">Bölümler</Typography>
      </Breadcrumbs>

      <Typography variant="h4" component="h1" gutterBottom align="center">
        Bölüm Seçin
      </Typography>

      <Stack direction="row" spacing={3} flexWrap="wrap" justifyContent="center" sx={{ mt: 3 }}>
        {universityData.map((department) => (
          <Box key={department.id} sx={{ width: { xs: '100%', sm: '45%', md: '30%' }, mb: 3 }}>
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
              onClick={() => handleDepartmentSelect(department.id)}
            >
              <CardContent>
                <Box textAlign="center">
                  <Typography variant="h6" component="h2" gutterBottom>
                    {department.title}
                  </Typography>
                  <Typography color="textSecondary" variant="body2">
                    {department.university}
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

export default DepartmentSelection;