import React, { useState } from 'react';
import { useMemo, type PropsWithChildren } from 'react';
import { ThemeContext } from '../context';
import { Color, type ColorName } from '../constants/color';
import { Spacing } from '../constants/spacing';
import { Height, Width } from '../constants/height';
import { FontSize, FontWeight } from '../constants/font';
import * as Dimensions from '../constants/height';
import * as Font from '../constants/font';
import { BorderWidth } from '../constants/border-width';
import { BorderRadius } from '../constants/border-radius';
import { useMode } from '../hooks/useMode';

export interface ThemeProviderProps extends PropsWithChildren<{}> {
  mode?: 'light' | 'dark' | 'device';
  colorAliases?: {
    Primary?: ColorName;
    Success?: ColorName;
    Secondary?: ColorName;
    Danger?: ColorName;
    Warning?: ColorName;
    Link?: ColorName;
  };
}

export function ThemeProvider(props: ThemeProviderProps) {
  const { children, colorAliases, mode } = props;
  const [preferredMode, setPreferredMode] = useState<
    'light' | 'dark' | undefined
  >(mode === 'dark' ? 'dark' : mode === 'light' ? 'light' : undefined);

  const color = useMemo(
    () =>
      Object.assign({}, Color, {
        Primary: Color[colorAliases?.Primary || 'Blue'],
        Success: Color[colorAliases?.Success || 'Green'],
        Secondary: Color[colorAliases?.Secondary || 'Gray'],
        Danger: Color[colorAliases?.Danger || 'Red'],
        Warning: Color[colorAliases?.Warning || 'Amber'],
        Link: Color[colorAliases?.Link || colorAliases?.Primary || 'Blue'],
      }),
    [colorAliases]
  );

  const { isDarkMode: _isDarkMode } = useMode();

  const isDarkMode = useMemo(
    () => (preferredMode ? preferredMode === 'dark' : _isDarkMode),
    [preferredMode, _isDarkMode]
  );

  const value = useMemo(
    () => ({
      color,
      spacing: Spacing,
      height: Height,
      width: Width,
      dimensions: Dimensions,
      fontSize: FontSize,
      fontWeight: FontWeight,
      font: Font,
      borderWidth: BorderWidth,
      borderRadius: BorderRadius,
      border: {
        borderWidth: BorderWidth,
        borderRadius: BorderRadius,
      },
      isDarkMode,
      isLightMode: !isDarkMode,
      mode: (isDarkMode ? 'light' : 'dark') as 'light' | 'dark',
      setPreferredMode,
    }),
    [isDarkMode, color]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
