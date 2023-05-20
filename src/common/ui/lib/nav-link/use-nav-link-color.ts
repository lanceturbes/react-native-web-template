import {useColorModeValue} from 'native-base';

const colorLookup = {
  light: {
    active: 'primary.700',
    normal: 'muted.900',
  },
  dark: {
    active: 'primary.400',
    normal: 'muted.50',
  },
} as const;

export function useNavLinkColor(isActive: boolean) {
  const colorMode: 'light' | 'dark' = useColorModeValue('light', 'dark');
  return colorLookup[colorMode][isActive ? 'active' : 'normal'];
}

export default useNavLinkColor;
