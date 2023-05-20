import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {AppLayout} from '@./layout';
import {HomeScreen} from '@./feature/home';
import {AboutScreen} from '@./feature/about';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
