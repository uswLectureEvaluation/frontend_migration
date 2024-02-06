import { Flex, VStack } from '@chakra-ui/react';
import { GetServerSidePropsContext } from 'next';
import { dehydrate, QueryClient } from 'react-query';

import { getMainLecture } from '@/apis/lecture';
import LectureList from '@/components/Lecture/LectureList';
import LectureSearch from '@/components/Lecture/LectureSearch';
import MajorFilter from '@/components/Lecture/MajorFilter';
import MainBanner from '@/components/Main/Banner';
import { LECTURE_MAIN } from '@/constants/queryKeys';
import { LectureOptions } from '@/interfaces/lecture';

// 메인 페이지
const Home = () => (
  <VStack w="100%" minH="100vh" spacing="50px" pb="100px">
    <MainBanner />
    <VStack w="60%" spacing="30px">
      <LectureSearch />
      <VStack w="100%" spacing="10px" align="flex-start">
        <Flex gap="5px" align="center">
          <MajorFilter />
        </Flex>
        <LectureList />
      </VStack>
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
    await queryClient.prefetchQuery([LECTURE_MAIN, option, majorType], () =>
      getMainLecture(option, majorType)
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
