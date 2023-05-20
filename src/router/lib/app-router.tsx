import React from 'react';
import AppRoutes from './app-routes';
import {NativeRouter} from 'react-router-native';

export function AppRouter() {
  return (
    <NativeRouter>
      <AppRoutes />
    </NativeRouter>
  );
}

export default AppRouter;
