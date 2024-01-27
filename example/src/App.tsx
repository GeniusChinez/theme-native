/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemeProvider, Text, View, useTheme } from 'theme-native';

export default function App() {
  return (
    <ThemeProvider mode="device">
      <View style={styles.container}>
        <ActualTest />
      </View>
    </ThemeProvider>
  );
}

function ActualTest() {
  const { setPreferredMode, spacing, color, isDarkMode } = useTheme();
  return (
    <View
      style={{
        gap: spacing[4],
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      darkBg={color.Stone[900]}
    >
      <Text weight="Bold">Hard times</Text>

      <TouchableOpacity
        style={{ padding: spacing[5], backgroundColor: color.Primary[600] }}
        onPress={() => {
          if (isDarkMode) {
            setPreferredMode('light');
          } else {
            setPreferredMode('dark');
          }
        }}
      >
        <Text color="white" darkColor="white">
          use {isDarkMode ? 'light' : 'dark'} mode
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
