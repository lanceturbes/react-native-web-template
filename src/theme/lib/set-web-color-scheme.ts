import {Platform} from 'react-native';

export function setWebColorScheme(colorScheme: 'light' | 'dark') {
  if (Platform.OS === 'web') {
    const html = document.querySelector('html')!;
    html.setAttribute('style', `color-scheme:${colorScheme}`);
  }
}

export default setWebColorScheme;
