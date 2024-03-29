import { Flex, VStack } from '@chakra-ui/react';
import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import { dehydrate, QueryClient } from 'react-query';

import { getMainLecture } from '@/apis/lecture';
import SuwikiButton from '@/components/Common/Button';
import LectureList from '@/components/Lecture/LectureList';
import LectureSearch from '@/components/Lecture/LectureSearch';
import MajorFilter from '@/components/Lecture/MajorFilter';
import OptionSort from '@/components/Lecture/OptionSort';
import MainBanner from '@/components/Main/Banner';
import SEO from '@/components/SEO';
import { LECTURE_MAIN } from '@/constants/queryKeys';
import ROUTES from '@/constants/routes';
import { LectureOptions } from '@/interfaces/lecture';

// 메인 페이지
const Home = () => (
  <VStack w="100%" minH="100vh" spacing="50px" pb="100px">
    <SEO title="수위키 - 강의평가의 모든 것, SUWIKI" />
    <MainBanner />
    <VStack w={{ base: '90%', lg: '60%' }} spacing="30px">
      <LectureSearch />
      <VStack w="100%" pb="10px" spacing="10px" align="flex-start">
        <Flex gap="5px" align="center">
          <MajorFilter />
          <OptionSort icon />
        </Flex>
        <LectureList />
      </VStack>
      <Link href={ROUTES.LECTURE} passHref>
        <SuwikiButton w="300px">더 보러 가기</SuwikiButton>
      </Link>
    </VStack>
  </VStack>
);

export default Home;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const option = (context?.query?.option as LectureOptions) || 'modifiedDate';
  const majorType = (context?.query?.majorType as string) || '전체';
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  try {
    await queryClient.prefetchInfiniteQuery(
      [LECTURE_MAIN, option, majorType],
      () => getMainLecture(1, option, majorType)
    );
    return {
      props: {
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  } finally {
    queryClient.clear();
  }
};
