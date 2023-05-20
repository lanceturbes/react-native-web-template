import React from 'react';
import {NativeBaseProvider} from 'native-base';

import {colorModeManager, themeConfig} from '@./theme';
import {AppRouter} from '@./router';

export default function App() {
  return (
    <NativeBaseProvider
      config={themeConfig}
      colorModeManager={colorModeManager}>
      <AppRouter />
    </NativeBaseProvider>
  );
}
