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
  const { setPreferredMode, spacing, color } = useTheme();
  return (
    <View
      style={{
        gap: spacing[4],
      }}
    >
      <Text>Hard times</Text>
      <TouchableOpacity
        style={{ padding: spacing[5], backgroundColor: color.Primary[600] }}
        onPress={() => {
          setPreferredMode('light');
        }}
      >
        <Text color="white" darkColor="white">
          use light mode
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
