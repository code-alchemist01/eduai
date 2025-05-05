import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Box,
  Typography,
  Container,
  Breadcrumbs,
  Link,
  Paper,
  Button,
  CircularProgress,
  Stack,
} from '@mui/material';
import { universityData } from '../data/universityData';

const CourseContent: React.FC = () => {
  const navigate = useNavigate();
  const { departmentId, yearId, semesterId, courseId } = useParams<{
    departmentId: string;
    yearId: string;
    semesterId: string;
    courseId: string;
  }>();

  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState<string>('');

  const department = universityData.find(d => d.id === departmentId);
  const year = department?.years.find(y => y.id === yearId);
  const semester = year?.semesters.find(s => s.id === semesterId);
  const course = semester?.courses.find(c => c.id === courseId);

  const generateContent = async () => {
    setLoading(true);
    // Burada Gemini API'yi kullanarak ders içeriği oluşturulacak
    // Şimdilik örnek içerik gösteriyoruz
    setTimeout(() => {
      setContent(`${course?.title} dersi için örnek içerik:\n\n` +
        '1. Dersin Amacı\n' +
        '- Temel kavramların öğretilmesi\n' +
        '- Pratik uygulamalar\n' +
        '- Problem çözme yeteneklerinin geliştirilmesi\n\n' +
        '2. Ders İçeriği\n' +
        '- Konu 1: Giriş ve Temel Kavramlar\n' +
        '- Konu 2: Teorik Altyapı\n' +
        '- Konu 3: Uygulama Örnekleri\n\n' +
        '3. Öğrenme Çıktıları\n' +
        '- Temel kavramları anlama ve uygulama\n' +
        '- Problem çözme yeteneği kazanma\n' +
        '- Pratik uygulama deneyimi');
      setLoading(false);
    }, 1000);
  };

  const handleStartTest = () => {
    // Test sayfasına yönlendirme yapılacak
    console.log('Test başlatılıyor...');
  };

  if (!department || !year || !semester || !course) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h5" color="error" align="center">
          Ders bulunamadı
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
        <Link
          component="button"
          variant="body1"
          onClick={() => navigate(`/departments/${departmentId}/years/${yearId}/semesters/${semesterId}/courses`)}
          sx={{ cursor: 'pointer' }}
        >
          {semester.title}
        </Link>
        <Typography color="text.primary">{course.title}</Typography>
      </Breadcrumbs>

      <Typography variant="h4" component="h1" gutterBottom align="center">
        {course.title}
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" gutterBottom>
        {department.title} - {year.title} - {semester.title}
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="center" sx={{ my: 3 }}>
        <Button
          variant="contained"
          onClick={generateContent}
          disabled={loading}
        >
          {content ? 'İçeriği Yenile' : 'İçerik Oluştur'}
        </Button>
        <Button
          variant="outlined"
          onClick={handleStartTest}
          disabled={!content || loading}
        >
          Teste Başla
        </Button>
      </Stack>

      {loading && (
        <Box display="flex" justifyContent="center" my={4}>
          <CircularProgress />
        </Box>
      )}

      {content && (
        <Paper sx={{ p: 3, mt: 3 }}>
          <Typography component="pre" sx={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>
            {content}
          </Typography>
        </Paper>
      )}
    </Container>
  );
};

export default CourseContent;