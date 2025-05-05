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

const CourseSelection: React.FC = () => {
  const navigate = useNavigate();
  const { departmentId, yearId, semesterId } = useParams<{
    departmentId: string;
    yearId: string;
    semesterId: string;
  }>();

  const department = universityData.find(d => d.id === departmentId);
  const year = department?.years.find(y => y.id === yearId);
  const semester = year?.semesters.find(s => s.id === semesterId);

  const handleCourseSelect = (courseId: string) => {
    navigate(`/departments/${departmentId}/years/${yearId}/semesters/${semesterId}/courses/${courseId}`);
  };

  if (!department || !year || !semester) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h5" color="error" align="center">
          Bölüm, yıl veya dönem bulunamadı
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
        <Link
          component="button"
          variant="body1"
          onClick={() => navigate(`/departments/${departmentId}/years/${yearId}/semesters`)}
          sx={{ cursor: 'pointer' }}
        >
          {year.title}
        </Link>
        <Typography color="text.primary">{semester.title}</Typography>
      </Breadcrumbs>

      <Typography variant="h4" component="h1" gutterBottom align="center">
        {semester.title} - Dersler
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" gutterBottom>
        {department.title} - {year.title} - {department.university}
      </Typography>

      <Stack spacing={2} sx={{ mt: 3 }}>
        {semester.courses.map((course) => (
          <Card
            key={course.id}
            sx={{
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(1.02)',
                transition: 'transform 0.2s ease-in-out',
              },
            }}
            onClick={() => handleCourseSelect(course.id)}
          >
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom>
                {course.title}
              </Typography>
              {course.description && (
                <Typography color="text.secondary" variant="body2">
                  {course.description}
                </Typography>
              )}
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Container>
  );
};

export default CourseSelection;