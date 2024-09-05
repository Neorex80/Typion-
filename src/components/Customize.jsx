import React, { useState } from "react";
import './Customize.css'; // Import your CSS file

const Customize = () => {
  const [theme, setTheme] = useState('default');
  const [fontSize, setFontSize] = useState('medium');

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
    document.body.className = e.target.value; // Apply the selected theme
  };

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
    document.documentElement.style.fontSize = e.target.value; // Apply font size
  };

  return (
    <div className="customize-container">
      <h2>Customize Settings</h2>
      <div className="setting">
        <label htmlFor="theme">Theme:</label>
        <select id="theme" value={theme} onChange={handleThemeChange}>
          <option value="default">Default</option>
          <option value="nightowl">Night Owl</option>
          <option value="dracula">Dracula</option>
          <option value="nord">Nord</option>
        </select>
      </div>
      <div className="setting">
        <label htmlFor="font-size">Font Size:</label>
        <select id="font-size" value={fontSize} onChange={handleFontSizeChange}>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
    </div>
  );
};

export default Customize;
