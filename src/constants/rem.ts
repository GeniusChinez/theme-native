import { PixelRatio } from 'react-native';

export const rem = (d: number) => d * 16 * PixelRatio.getFontScale();
