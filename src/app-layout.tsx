import {Text, View} from 'react-native';
import React from 'react';
import {Outlet, useNavigate} from 'react-router-dom';

export default function AppLayout() {
  const navigate = useNavigate();

  return (
    <>
      <View>
        <Text onPress={() => navigate('/')}>Home</Text>
        <Text onPress={() => navigate('/about')}>About</Text>
      </View>
      <Outlet />
    </>
  );
}
