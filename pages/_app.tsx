import { Box, ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import Header from '@/components/Header';
import { colorTheme } from '@/public/theme/theme';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            cacheTime: 1000 * 60 * 5,
            staleTime: 1000 * 60 * 5,
          },
        },
      })
  );
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ChakraProvider theme={colorTheme}>
          <Box w="100%" pt="79px">
            <Header />
            <Component {...pageProps} />
          </Box>
        </ChakraProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}
