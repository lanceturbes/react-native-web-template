import React from 'react';
import {Route, Routes} from 'react-router-dom';
import AppLayout from './app-layout';
import HomeScreen from './home-screen';
import AboutScreen from './about-screen';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
      </Route>
    </Routes>
  );
}
