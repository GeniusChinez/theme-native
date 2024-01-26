import React from 'react';
import { Color } from './constants/color';
import { Spacing } from './constants/spacing';
import { Height, Width } from './constants/height';
import { FontSize, FontWeight } from './constants/font';
import { BorderWidth } from './constants/border-width';
import { BorderRadius } from './constants/border-radius';
import * as Dimensions from './constants/height';
import * as Font from './constants/font';

export interface ThemeContextValue {
  color: typeof Color;
  spacing: typeof Spacing;
  height: typeof Height;
  width: typeof Width;
  dimensions: typeof Dimensions;
  fontSize: typeof FontSize;
  fontWeight: typeof FontWeight;
  font: typeof Font;
  borderWidth: typeof BorderWidth;
  borderRadius: typeof BorderRadius;
  border: {
    borderWidth: typeof BorderWidth;
    borderRadius: typeof BorderRadius;
  };
  isDarkMode: boolean;
  isLightMode: boolean;
  mode: 'light' | 'dark';
  setPreferredMode: (mode: 'light' | 'dark' | undefined) => void;
}

export const ThemeContext = React.createContext<ThemeContextValue>({
  color: Color,
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
  isDarkMode: false,
  isLightMode: true,
  mode: 'light',
  setPreferredMode() {},
});
