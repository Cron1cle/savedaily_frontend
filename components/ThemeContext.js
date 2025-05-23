import React, { createContext, useContext, useState, useEffect } from 'react';
import { Appearance } from 'react-native';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [themeMode, setThemeMode] = useState(Appearance.getColorScheme() || 'light'); // Initialisiere mit dem System-Theme
  const [useSystemTheme, setUseSystemTheme] = useState(true); // Flag, um das System-Theme zu verwenden

  // Listener für Änderungen des System-Themes
  useEffect(() => {
    console.log('Appearance Listener registriert');
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      console.log('System-Theme geändert:', colorScheme); // Debugging
      if (useSystemTheme) {
        setThemeMode(colorScheme); // Aktualisiere das Theme basierend auf dem System
      }
    });
    return () => {
      console.log('Appearance Listener entfernt');
      subscription.remove(); // Listener entfernen, wenn der Component unmounted wird
    };
  }, [useSystemTheme]);

  // Manuelles Umschalten zwischen Light und Dark
  const toggleTheme = () => {
    setUseSystemTheme(false); // Deaktiviere das automatische System-Theme
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  // Umschalten zwischen System-Theme und manuellem Theme
  const toggleSystemTheme = () => {
    setUseSystemTheme((prev) => !prev);
    if (!useSystemTheme) {
      setThemeMode(Appearance.getColorScheme()); // Setze das Theme auf das aktuelle System-Theme
    }
  };

  return (
    <ThemeContext.Provider value={{ colorScheme: themeMode, toggleTheme, toggleSystemTheme, useSystemTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
