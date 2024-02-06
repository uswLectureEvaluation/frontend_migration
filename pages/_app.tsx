import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import Header from '@/components/Header';
import { colorTheme } from '@/public/theme/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={colorTheme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
