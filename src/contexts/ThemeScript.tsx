'use client';

import { useEffect } from 'react';

export function ThemeScript() {
  const setThemeMode = `
    function getInitialTheme() {
      const savedTheme = localStorage.getItem('theme');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      if (savedTheme === 'dark' || savedTheme === 'light') {
        return savedTheme;
      }
      
      if (savedTheme === 'system') {
        return systemPrefersDark ? 'dark' : 'light';
      }
      
      return 'light'; // default
    }
    
    document.documentElement.classList.add(getInitialTheme());
  `;

  return <script dangerouslySetInnerHTML={{ __html: setThemeMode }} />;
}