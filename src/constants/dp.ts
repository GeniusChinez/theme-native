import { PixelRatio } from 'react-native';

export const dpToPixels = (dp: number) => {
  const density = PixelRatio.get(); // Get the device's pixel density
  const fontScale = PixelRatio.getFontScale(); // Get the font scaling factor

  return dp * density * fontScale; // Return the calculated pixel value
};
