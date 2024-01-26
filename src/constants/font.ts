import { rem } from './rem';

export const FontWeight = {
  Thin: '100',
  Extralight: '200',
  Light: '300',
  Normal: '400',
  Medium: '500',
  Semibold: '600',
  Bold: '700',
  Extrabold: '800',
  Black: '900',
} as const;

export const FontSize = {
  xs: rem(0.75),
  sm: rem(0.875),
  md: rem(1),
  base: rem(1),
  lg: rem(1.125),
  xl: rem(1.25),
  xl2: rem(1.5),
  xl3: rem(1.875),
  xl4: rem(2.25),
  xl5: rem(3),
  xl6: rem(3.75),
  xl7: rem(4.5),
  xl8: rem(6),
  xl9: rem(8),
};
