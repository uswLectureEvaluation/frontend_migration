import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
        @font-face {
            font-family: pretendard;
            src: url(/font/Pretendard-Regular.subset.woff2) format('woff2');
            src: url(/font/Pretendard-Regular.subset.woff) format('woff');
            font-weight: 400;
            font-style: normal;
            font-display: swap;
        }
        @font-face {
            font-family: pretendard;
            src: url(/font/Pretendard-Bold.subset.woff2) format('woff2');
            src: url(/font/Pretendard-Bold.subset.woff) format('woff');
            font-weight: 700;
            font-style: normal;
            font-display: swap;
        }
        @font-face {
            font-family: pretendard;
            src: url(/font/Pretendard-Black.subset.woff2) format('woff2');
            src: url(/font/Pretendard-Black.subset.woff) format('woff');
            font-weight: 900;
            font-style: normal;
            font-display: swap;
        }
      `}
  />
);

export default Fonts;
