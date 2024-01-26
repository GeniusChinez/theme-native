import { Spacing } from './spacing';

export const Height = {
  'Auto': 'auto',
  ...Spacing,
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.666667%',
  '2/6': '33.333333%',
  '3/6': '50%',
  '4/6': '66.666667%',
  '5/6': '83.333333%',
  'Full': '100%',
  'Screen': '100vh',
  'Min': 'min-content',
  'Max': 'max-content',
  'Fit': 'fit-content',
};

export const Width = Height;
