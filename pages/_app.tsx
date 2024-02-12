import { Box, ChakraProvider } from '@chakra-ui/react';
import type { AppContext, AppProps } from 'next/app';
import cookies from 'next-cookies';
import { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { MutableSnapshot, RecoilRoot } from 'recoil';

import { isLoginState } from '@/atoms/auth';
import Header from '@/components/Header';
import ToastList from '@/components/ToastList';
import { TOKEN_KEY } from '@/constants/auth';
import Fonts from '@/public/fonts';
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

  const initialState = ({ set }: MutableSnapshot) => {
    const { isLogin } = pageProps;
    set(isLoginState, isLogin || false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot initializeState={initialState}>
        <Hydrate state={pageProps.dehydratedState}>
          <ChakraProvider theme={colorTheme}>
            <Fonts />
            <Box w="100%" pt="79px">
              <ToastList />
              <Header />
              <Component {...pageProps} />
            </Box>
          </ChakraProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const { ctx } = appContext;
  const values = cookies(ctx);
  const accessToken = values[TOKEN_KEY];
  const isLogin = !!accessToken;
  return { pageProps: { isLogin } };
};
