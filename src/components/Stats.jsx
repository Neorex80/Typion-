import React from 'react';
import './Stats.css';

const Stats = ({ wpm, accuracy, errors, errorRate, keystrokeEfficiency, adjustedSpeed }) => {
  return (
    <div className="stats-container">
      <div className="stats">
        <p>WPM: {wpm}</p>
        <p>Accuracy: {accuracy}%</p>
        <p>Errors: {errors}</p>
        <p>Error Rate: {errorRate}%</p>
        <p>Keystroke Efficiency: {keystrokeEfficiency}%</p>
        <p>Adjusted Speed: {adjustedSpeed} WPM</p>
      </div>
    </div>
  );
};

export default Stats;
