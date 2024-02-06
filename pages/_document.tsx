/* eslint-disable react/no-invalid-html-attribute */
/* eslint-disable react/no-danger */
/* eslint-disable @next/next/no-css-tags */
import { ColorModeScript } from '@chakra-ui/react';
import { Head, Html, Main, NextScript } from 'next/document';

import { colorTheme } from '@/public/theme/theme';

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <ColorModeScript
          initialColorMode={colorTheme.config.initialColorMode}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
