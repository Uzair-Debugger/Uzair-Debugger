'use client';

import { useState, useEffect } from 'react';
import { MoonStar, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import CustomButton from './custom-button';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme = 'dark', setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  // until the UI is mounted, display a dummy icon
  if (!mounted) {
    return (
      <CustomButton>
        <Sun />
      </CustomButton>
    );
  }

  return (
    <CustomButton onClick={toggleTheme}>
      {theme === 'dark' ? <Sun /> : <MoonStar />}
    </CustomButton>
  );
};

export default ThemeSwitcher;