/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import { ThemeProvider, useTheme } from 'theme-native';

export default function App() {
  return (
    <ThemeProvider mode="device">
      <ActualTest />
    </ThemeProvider>
  );
}

function ActualTest() {
  const { spacing } = useTheme();
  return (
    <View
      style={{
        gap: spacing[4],
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>asdadsa</Text>
    </View>
  );
}
