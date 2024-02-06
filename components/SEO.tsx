/* eslint-disable react/require-default-props */
import Head from 'next/head';

interface SEOProps {
  pathname?: string;
  title?: string;
  description?: string;
  ogImage?: string;
}

const SEO = ({
  pathname = process.env.NEXT_PUBLIC_BASE_URL,
  title = 'SUWIKI | 수위키',
  description = '수위키는 강의 수강 후기와 시험 정보를 공유하는 커뮤니티입니다. 수업을 듣고 난 후에는 수업에 대한 후기를 남겨주세요!',
  ogImage = '/img/logo.png',
}: SEOProps) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="SUWIKI 수위키" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={ogImage} />
    <meta
      property="og:url"
      content={`${process.env.NEXT_PUBLIC_BASE_URL}${pathname}`}
    />
    <meta property="og:locale" content="ko_KR" />
    <meta property="twitter:card" content="summary" />
    <meta property="twitter:site" content="SUWIKI 수위키" />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content={ogImage} />
    <meta
      property="twitter:url"
      content={`${process.env.NEXT_PUBLIC_BASE_URL}${pathname}`}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
);

export default SEO;
