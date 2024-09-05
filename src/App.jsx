import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import TypingTest from './components/TypingTest';
import ThemeSwitcher from './components/ThemeSwitcher';
import ResultsPage from './components/ResultsPage'; 
import Footer from './components/Footer';
import './App.css'; 


const App = () => {
  return (
    <Router>
      <div className="app-container">
        <ThemeSwitcher />
        <div className="header">
          <h1>Typion</h1>
        </div>
        <div className="typing-test-container">
          <Routes>
            <Route path="/" element={<TypingTest />} /> {/* TypingTest page */}
            <Route path="/results" element={<ResultsPage />} /> {/* Results page */}
          </Routes>
        </div>
        <Footer /> {/* Footer */}
      </div>
    </Router>
  );
};

export default App;
