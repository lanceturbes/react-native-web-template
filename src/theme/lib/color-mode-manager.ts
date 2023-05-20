import {ColorMode} from 'native-base';
import type {StorageManager} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import setWebColorScheme from './set-web-color-scheme';

export const colorModeManager: StorageManager = {
  get: async () => {
    try {
      let val = await AsyncStorage.getItem('@my-app-color-mode');
      const colorScheme = val === 'dark' ? 'dark' : 'light';
      setWebColorScheme(colorScheme);
      return colorScheme;
    } catch (e) {
      console.log(e);
      return 'light';
    }
  },
  set: async (value: ColorMode) => {
    const colorScheme = value === 'dark' ? 'dark' : 'light';
    try {
      await AsyncStorage.setItem('@my-app-color-mode', colorScheme);
      setWebColorScheme(colorScheme);
    } catch (e) {
      console.log(e);
    }
  },
};

export default colorModeManager;
