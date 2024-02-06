/* eslint-disable import/prefer-default-export */
import { extendTheme } from '@chakra-ui/react';

// 공통 컬러
const colors = {
  standard: {
    white: '#FFFFFF',
    black: '#222222',
  },
  main: {
    blue: '#346CFD',
    violet: '#7800FF',
  },
  lightgray: {
    200: '#EEEEEE',
    400: '#E0E0E0',
    600: '#A3A3A3',
    800: '#A9ADB2',
  },
  darkgray: {
    200: '#5E5E5E',
    400: '#515151',
    600: '#34353C',
    800: '#27282E',
  },
  error: '#EE4444',
};

const themeColors = {};

const colorConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const etc = {
  fonts: {
    heading: `'Pretendard', sans-serif`,
    body: `'Pretendard', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: 'standard.white',
        color: 'standard.black',
      },
    },
  },
  breakpoints: {
    sm: '0px',
    md: '520px',
    lg: '1024px',
    xl: '1300px',
  },
  textStyles: {},
};

export const colorTheme = extendTheme({
  config: colorConfig,
  semanticTokens: {
    colors: {
      ...themeColors,
    },
  },
  colors: {
    ...colors,
  },
  ...etc,
});
