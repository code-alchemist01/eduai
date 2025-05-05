import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  useTheme,
  alpha,
  Fade,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import GroupsIcon from '@mui/icons-material/Groups';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

const About: React.FC = () => {
  const theme = useTheme();

  const sections = [
    {
      title: 'Vizyonumuz',
      content: 'AI-EDU olarak, yapay zeka teknolojisini eğitimle birleştirerek öğrencilerin öğrenme deneyimini dönüştürmeyi hedefliyoruz. Her öğrencinin kendi hızında ve tarzında öğrenebileceği, kişiselleştirilmiş bir eğitim platformu sunuyoruz.',
      icon: <SchoolIcon sx={{ fontSize: 40 }} />,
      color: theme.palette.primary.main,
    },
    {
      title: 'Misyonumuz',
      content: 'Eğitimde fırsat eşitliğini sağlamak ve kaliteli eğitimi herkes için erişilebilir kılmak için çalışıyoruz. Yapay zeka teknolojisini kullanarak, her öğrencinin potansiyelini maksimuma çıkarmasına yardımcı oluyoruz.',
      icon: <LightbulbIcon sx={{ fontSize: 40 }} />,
      color: theme.palette.secondary.main,
    },
    {
      title: 'Değerlerimiz',
      content: '• Yenilikçilik: Sürekli olarak platformumuzu geliştiriyor ve en son teknolojileri entegre ediyoruz.\n• Kişiselleştirme: Her öğrencinin benzersiz olduğuna inanıyor ve öğrenme deneyimini buna göre şekillendiriyoruz.\n• Kalite: Eğitim içeriklerimizi uzman eğitimcilerle birlikte hazırlıyor ve sürekli güncelliyoruz.\n• Erişilebilirlik: Platformumuzu herkesin kullanabileceği şekilde tasarlıyor ve geliştiriyoruz.',
      icon: <GroupsIcon sx={{ fontSize: 40 }} />,
      color: '#4CAF50',
    },
    {
      title: 'Ekibimiz',
      content: 'AI-EDU, eğitim teknolojileri alanında uzman bir ekip tarafından geliştirilmektedir. Ekibimiz, eğitimciler, yazılım geliştiricileri, yapay zeka uzmanları ve içerik üreticilerinden oluşmaktadır. Amacımız, öğrencilerin öğrenme yolculuğunda onlara rehberlik etmek ve başarılarına katkıda bulunmaktır.',
      icon: <AccessibilityNewIcon sx={{ fontSize: 40 }} />,
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
          Hakkımızda
        </Typography>
      </Fade>

      <Grid container spacing={4}>
        {sections.map((section, index) => (
          <Grid item xs={12} md={6} key={section.title}>
            <Paper
              elevation={2}
              sx={{
                p: 4,
                height: '100%',
                background: `linear-gradient(135deg, ${alpha(section.color, 0.05)}, ${alpha(
                  section.color,
                  0.15
                )})`,
                borderRadius: 4,
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: `0 8px 24px ${alpha(section.color, 0.2)}`,
                },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: 2,
                  color: section.color,
                }}
              >
                {section.icon}
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{ ml: 2, fontWeight: 600, color: section.color }}
                >
                  {section.title}
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  whiteSpace: 'pre-line',
                  color: 'text.secondary',
                  lineHeight: 1.8,
                }}
              >
                {section.content}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default About;