import React from "react";
import { useLocation } from "react-router-dom";
import "./ResultsPage.css"; // Assuming you have styles

const ResultsPage = () => {
  const location = useLocation();
  const { userInput, text, errors, wpm, accuracy, errorRate, keystrokeEfficiency, adjustedSpeed, author } = location.state;

  return (
    <div className="results-container">
      <h2>Test Results</h2>
      <p><strong>Typed Text:</strong> {userInput}</p>
      <p><strong>Original Text:</strong> {text}</p>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Errors:</strong> {errors}</p>
      <p><strong>WPM:</strong> {wpm}</p>
      <p><strong>Accuracy:</strong> {accuracy}%</p>
      <p><strong>Error Rate:</strong> {errorRate}%</p>
      <p><strong>Keystroke Efficiency:</strong> {keystrokeEfficiency}%</p>
      <p><strong>Adjusted Speed:</strong> {adjustedSpeed} WPM</p>
    </div>
  );
};

export default ResultsPage;
