'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';
import { Button } from './Button';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { value: 'light', label: 'Light', icon: SunIcon },
    { value: 'dark', label: 'Dark', icon: MoonIcon },
    { value: 'system', label: 'System', icon: ComputerDesktopIcon },
  ] as const;

  return (
    <div className="flex items-center space-x-2 p-1 bg-gray-100 dark:bg-dark700 rounded-lg">
      {themes.map(({ value, label, icon: Icon }) => {
        const isActive = theme === value;
        return (
          <Button
            key={value}
            variant={isActive ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setTheme(value)}
            className={`flex items-center space-x-2 px-3 py-2 ${
              isActive 
                ? 'bg-electric text-white shadow-sm' 
                : 'text-gray-600 dark:text-chrome hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <Icon className="h-4 w-4" />
            <span className="text-sm font-medium">{label}</span>
          </Button>
        );
      })}
    </div>
  );
}
