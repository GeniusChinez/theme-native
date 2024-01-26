import { useEffect } from 'react';
import { useTheme } from './useTheme';

export function useLightMode() {
  const { setPreferredMode } = useTheme();
  useEffect(() => {
    setPreferredMode('light');
  }, [setPreferredMode]);
}
