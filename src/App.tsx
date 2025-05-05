import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import SubjectList from './components/SubjectList';
import GradeSelection from './components/GradeSelection';
import SubjectSelection from './components/SubjectSelection';
import TopicSelection from './components/TopicSelection';
import TopicContent from './components/TopicContent';
import About from './components/About';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<SubjectList />} />
          <Route path="/subjects/:levelId" element={<GradeSelection />} />
          <Route path="/subjects/:levelId/:gradeId" element={<SubjectSelection />} />
          <Route path="/subjects/:levelId/:gradeId/:subjectId" element={<TopicSelection />} />
          <Route
            path="/subjects/:levelId/:gradeId/:subjectId/:topicId"
            element={<TopicContent />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
