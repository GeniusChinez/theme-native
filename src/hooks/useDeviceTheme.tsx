import { useEffect } from 'react';
import { useTheme } from './useTheme';

export function useDeviceTheme() {
  const { setPreferredMode } = useTheme();
  useEffect(() => {
    setPreferredMode(undefined);
  }, [setPreferredMode]);
}
