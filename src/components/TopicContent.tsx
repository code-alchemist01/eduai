import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Button,
  CircularProgress,
  Card,
  CardContent,
  Divider,
  Alert,
  Snackbar,
  Tabs,
  Tab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import QuizIcon from '@mui/icons-material/Quiz';
import { generateContent, generateTest } from '../services/geminiService';

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const TopicContent: React.FC = () => {
  const { levelId, gradeId, subjectId, topicId } = useParams<{
    levelId: string;
    gradeId: string;
    subjectId: string;
    topicId: string;
  }>();

  const [activeTab, setActiveTab] = useState(0);
  const [contentLoading, setContentLoading] = useState(false);
  const [content, setContent] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  const handleExplanationClose = () => {
    setSelectedQuestion(null);
  };

  const parseTestResponse = (response: string): Question[] => {
    try {
      if (!response.includes('TEST BAŞLANGIÇ') || !response.includes('TEST BİTİŞ')) {
        throw new Error('Geçersiz test formatı');
      }

      const testContent = response.split('TEST BAŞLANGIÇ')[1].split('TEST BİTİŞ')[0].trim();
      const [questionsText, answersText] = testContent.split('CEVAP ANAHTARI:').map(text => text.trim());

      // Cevap anahtarını işle
      const answers = answersText.split('\n')
        .map(line => line.trim())
        .filter(line => line.match(/^\d+\./)) // Sadece "1." gibi satırları al
        .map(line => line.split('.')[1].trim().toLowerCase());

      // Soruları işle
      const questions = questionsText.split('SORU').slice(1) // İlk boş elemanı atla
        .map((questionBlock, index) => {
          const parts = questionBlock.split('Açıklama:');
          const questionPart = parts[0].trim();
          const explanation = parts[1] ? parts[1].trim() : '';

          const lines = questionPart.split('\n').map(line => line.trim()).filter(Boolean);
          const questionNumber = lines[0].replace(':', '').trim();
          const questionText = lines[1];
          
          const options = lines.slice(2)
            .filter(line => /^[A-D]\)/.test(line))
            .map(line => line.replace(/^[A-D]\)\s*/, '').trim());

          if (options.length !== 4) {
            throw new Error(`Soru ${questionNumber} için eksik veya fazla şık bulundu`);
          }

          return {
            id: parseInt(questionNumber),
            text: questionText,
            options,
            correctAnswer: ['a', 'b', 'c', 'd'].indexOf(answers[index]),
            explanation
          };
        });

      return questions;
    } catch (error) {
      console.error('Test yanıtı ayrıştırılırken hata oluştu:', error);
      return [];
    }
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleContentGeneration = async () => {
    setContentLoading(true);
    try {
      if (!levelId || !gradeId || !subjectId || !topicId) {
        throw new Error('Gerekli parametreler eksik');
      }

      const params = {
        level: levelId,
        grade: gradeId,
        subject: subjectId,
        topic: topicId
      };
      
      const generatedContent = await generateContent(params);
      setContent(generatedContent);
      setSuccess('İçerik başarıyla oluşturuldu!');
    } catch (error) {
      console.error('Content generation error:', error);
      setError(error instanceof Error ? error.message : 'İçerik oluşturulurken bir hata oluştu');
    } finally {
      setContentLoading(false);
    }
  };

  const [testState, setTestState] = useState<{
    questions: Question[];
    userAnswers: number[];
    showResults: boolean;
  }>({ questions: [], userAnswers: [], showResults: false });
  
  const handleTestGeneration = async () => {
    setContentLoading(true);
    try {
      if (!levelId || !gradeId || !subjectId || !topicId) {
        throw new Error('Gerekli parametreler eksik');
      }
  
      const params = {
        level: levelId,
        grade: gradeId,
        subject: subjectId,
        topic: topicId,
        difficulty: 'medium' as const,
        questionCount: 5
      };
      
      const generatedContent = await generateTest(params);
      const questions = parseTestResponse(generatedContent);
      setTestState({
        questions,
        userAnswers: new Array(questions.length).fill(-1),
        showResults: false
      });
      setContent('');
      setSuccess('Test başarıyla oluşturuldu!');
    } catch (error) {
      console.error('Test generation error:', error);
      setError(error instanceof Error ? error.message : 'Test oluşturulurken bir hata oluştu');
    } finally {
      setContentLoading(false);
    }
  };

  const handleAnswerSelect = (questionIndex: number, value: number) => {
    setTestState(prev => ({
      ...prev,
      userAnswers: prev.userAnswers.map((ans, idx) => idx === questionIndex ? value : ans)
    }));
  };

  const handleTestSubmit = () => {
    setTestState(prev => ({ ...prev, showResults: true }));
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Card elevation={2} sx={{ borderRadius: 2 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={activeTab} onChange={handleTabChange} aria-label="content tabs">
            <Tab 
              icon={<AutoStoriesIcon />} 
              iconPosition="start" 
              label="Konu Anlatımı" 
            />
            <Tab 
              icon={<QuizIcon />} 
              iconPosition="start" 
              label="Test" 
            />
          </Tabs>
        </Box>
        <CardContent>
          {contentLoading ? (
            <Box display="flex" flexDirection="column" alignItems="center" p={3}>
              <CircularProgress size={40} />
              <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>
                {activeTab === 0 ? 'İçerik hazırlanıyor...' : 'Test hazırlanıyor...'}
              </Typography>
            </Box>
          ) : activeTab === 0 ? (
            content ? (
              <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Typography variant="body1" sx={{ whiteSpace: 'pre-line', mb: 2 }}>
                  {content}
                </Typography>
                <Button
                  variant="contained"
                  onClick={handleContentGeneration}
                  startIcon={<AutoStoriesIcon />}
                  sx={{ mt: 'auto' }}
                >
                  Yeni İçerik Oluştur
                </Button>
              </Box>
            ) : (
              <Box textAlign="center">
                <Button
                  variant="contained"
                  onClick={handleContentGeneration}
                  startIcon={<AutoStoriesIcon />}
                >
                  İçerik Oluştur
                </Button>
              </Box>
            )
          ) : (
            testState.questions.length > 0 ? (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {testState.questions.map((question, questionIndex) => (
                  <Box key={question.id} sx={{ mb: 3 }}>
                    <Typography variant="h6" gutterBottom>
                      Soru {question.id}:
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      {question.text}
                    </Typography>
                    <Box sx={{ ml: 2 }}>
                      {question.options.map((option, optionIndex) => (
                        <Box
                          key={optionIndex}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: 1,
                            p: 1,
                            borderRadius: 1,
                            bgcolor: testState.showResults
                              ? optionIndex === question.correctAnswer
                                ? 'success.main'
                                : testState.userAnswers[questionIndex] === optionIndex
                                  ? 'error.main'
                                  : 'transparent'
                              : 'transparent',
                            color: testState.showResults &&
                              (optionIndex === question.correctAnswer ||
                                testState.userAnswers[questionIndex] === optionIndex)
                              ? 'white'
                              : 'inherit'
                          }}
                        >
                          <input
                            type="radio"
                            name={`question-${questionIndex}`}
                            value={optionIndex}
                            checked={testState.userAnswers[questionIndex] === optionIndex}
                            onChange={() => handleAnswerSelect(questionIndex, optionIndex)}
                            disabled={testState.showResults}
                            style={{ marginRight: '8px' }}
                          />
                          {String.fromCharCode(65 + optionIndex)}) {option}
                        </Box>
                      ))}
                      {testState.showResults && testState.userAnswers[questionIndex] !== question.correctAnswer && (
                        <Button
                          size="small"
                          onClick={() => setSelectedQuestion(questionIndex)}
                          sx={{ mt: 1 }}
                        >
                          Açıklamayı Göster
                        </Button>
                      )}
                    </Box>
                  </Box>
                ))}
                <Button
                  variant="contained"
                  onClick={testState.showResults ? handleTestGeneration : handleTestSubmit}
                  startIcon={testState.showResults ? <QuizIcon /> : undefined}
                  disabled={testState.userAnswers.includes(-1) && !testState.showResults}
                  sx={{ mt: 2 }}
                >
                  {testState.showResults ? 'Yeni Test Oluştur' : 'Testi Bitir'}
                </Button>
              </Box>
            ) : (
              <Box textAlign="center">
                <Button
                  variant="contained"
                  onClick={handleTestGeneration}
                  startIcon={<QuizIcon />}
                >
                  Test Oluştur
                </Button>
              </Box>
            )
          )}
        </CardContent>
      </Card>

      <Dialog
        open={selectedQuestion !== null}
        onClose={handleExplanationClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Soru {selectedQuestion !== null ? testState.questions[selectedQuestion].id : ''} Açıklaması</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            {selectedQuestion !== null ? testState.questions[selectedQuestion].explanation : ''}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleExplanationClose}>Kapat</Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setError('')}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setError('')}
          severity="error"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {error}
        </Alert>
      </Snackbar>

      <Snackbar
        open={!!success}
        autoHideDuration={3000}
        onClose={() => setSuccess('')}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSuccess('')}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {success}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default TopicContent;