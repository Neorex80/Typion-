import React, { useState } from 'react';
import './ThemeSwitcher.css'; // Import your CSS file here

const themes = {
  nightowl: 'nightowl',
  dracula: 'dracula',
  solarizedlight: 'solarizedlight',
  palenight: 'palenight',
  monokai: 'monokai',
  onelight: 'onelight',
  materialdark: 'materialdark',
  nord: 'nord',
  pastel: 'pastel',
  cyberpunkneon: 'cyberpunkneon',
  retro: 'retro',
  oceanbreeze: 'oceanbreeze'
};

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(themes.nightowl);

  const handleThemeChange = (event) => {
    const newTheme = event.target.value;
    document.body.className = ''; // Clear all existing classes
    document.body.classList.add(newTheme);
    setTheme(newTheme);
  };

  return (
    <div className="theme-switcher-container">
      <select value={theme} onChange={handleThemeChange}>
        {Object.keys(themes).map((themeName) => (
          <option key={themeName} value={themes[themeName]}>
            {themeName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ThemeSwitcher;
