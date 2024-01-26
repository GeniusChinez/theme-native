import React from 'react';
import { Text as ReactNativeText } from 'react-native';
import type { TextProps as ReactNativeTextProps } from 'react-native';
import { useTheme } from '../hooks/useTheme';

export interface TextProps extends ReactNativeTextProps {
  color?: string;
  darkColor?: string;
}

export function Text(props: TextProps) {
  const { color, darkColor, style, ...restOfProps } = props;
  const { isDarkMode } = useTheme();

  const theme = useTheme();

  return (
    <ReactNativeText
      style={{
        color: isDarkMode ? darkColor || theme.color.Gray[300] : color,
        ...(style as any),
      }}
      {...restOfProps}
    />
  );
}
