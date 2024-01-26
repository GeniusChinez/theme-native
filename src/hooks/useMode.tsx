import { useMemo } from 'react';
import { useColorScheme } from 'react-native';

export function useMode() {
  const isDarkMode = useColorScheme() === 'dark';

  return useMemo(
    () => ({
      isDarkMode,
    }),
    [isDarkMode]
  );
}
