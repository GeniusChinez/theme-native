import { useEffect } from 'react';
import { useTheme } from './useTheme';

export function useDarkMode() {
  const { setPreferredMode } = useTheme();
  useEffect(() => {
    setPreferredMode('dark');
  }, [setPreferredMode]);
}
