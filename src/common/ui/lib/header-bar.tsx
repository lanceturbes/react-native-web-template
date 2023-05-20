import React from 'react';
import {
  Box,
  HStack,
  IconButton,
  MoonIcon,
  SunIcon,
  useColorMode,
} from 'native-base';

import NavLink from './nav-link/nav-link';

export function HeaderBar() {
  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <HStack
      p="3"
      bg={colorMode === 'light' ? 'light.50' : 'dark.50'}
      justifyContent="space-between"
      alignItems="center">
      <Box role="navigation" px="2">
        <HStack role="list" space="4">
          <Box role="listitem">
            <NavLink to="/" fontSize="md">
              Home
            </NavLink>
          </Box>
          <Box role="listitem">
            <NavLink to="/about" fontSize="md">
              About
            </NavLink>
          </Box>
        </HStack>
      </Box>
      <IconButton
        size="lg"
        onPress={toggleColorMode}
        icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
      />
    </HStack>
  );
}

export default HeaderBar;
