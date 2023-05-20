import {INativebaseConfig} from 'native-base';

export const themeConfig: INativebaseConfig = {
  strictMode: 'warn',
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};

export default themeConfig;
