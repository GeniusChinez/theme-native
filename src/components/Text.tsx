import React from 'react';
import { Text as ReactNativeText } from 'react-native';
import type { TextProps as ReactNativeTextProps } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import type { FontSize, FontWeight } from '../constants/font';

export interface TextProps extends ReactNativeTextProps {
  size?: keyof typeof FontSize;
  color?: string;
  darkColor?: string;

  // implement the following
  weight?: keyof typeof FontWeight;
  // variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'p';

  // isUnderlined?: boolean;
  // isItalic?: boolean;
}

export function Text(props: TextProps) {
  const { color, darkColor, style, size, weight, ...restOfProps } = props;
  const { isDarkMode } = useTheme();

  const theme = useTheme();

  return (
    <ReactNativeText
      style={{
        color: isDarkMode ? darkColor || theme.color.Gray[300] : color,
        fontSize: theme.fontSize[size || 'base'],
        fontWeight: theme.fontWeight[weight || 'Medium'],
        ...(style as any),
      }}
      {...restOfProps}
    />
  );
}
