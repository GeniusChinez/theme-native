import React from 'react';
import { Text as ReactNativeText } from 'react-native';
import type { TextProps as ReactNativeTextProps } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import type { FontSize } from '../constants/font';

export interface TextProps extends ReactNativeTextProps {
  size?: keyof typeof FontSize;
  color?: string;
  darkColor?: string;
}

export function Text(props: TextProps) {
  const { color, darkColor, style, size, ...restOfProps } = props;
  const { isDarkMode } = useTheme();

  const theme = useTheme();

  return (
    <ReactNativeText
      style={{
        color: isDarkMode ? darkColor || theme.color.Gray[300] : color,
        fontSize: theme.fontSize[size || 'base'],
        ...(style as any),
      }}
      {...restOfProps}
    />
  );
}
