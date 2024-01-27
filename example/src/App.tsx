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
      <Text weight="Bold" variant="h1" isCancelled>
        H1
      </Text>
      <Text weight="Bold" variant="h2" isUnderlined isCancelled>
        H2
      </Text>
      <Text weight="Bold" variant="h3" isUnderlined>
        H3
      </Text>
      <Text weight="Bold" variant="h4" isItalic>
        H4
      </Text>
      <Text weight="Bold" variant="h5">
        H5
      </Text>
      <Text weight="Bold" variant="h6">
        H6
      </Text>
      <Text weight="Bold" variant="h7">
        H7
      </Text>
      <Text weight="Bold" variant="p">
        P
      </Text>
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
