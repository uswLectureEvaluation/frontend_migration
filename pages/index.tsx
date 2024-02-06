import { VStack } from '@chakra-ui/react';
import { dehydrate, QueryClient } from 'react-query';

import { getMainLecture } from '@/apis/lecture';
import LectureList from '@/components/Lecture/LectureList';
import LectureSearch from '@/components/Lecture/LectureSearch';
import MainBanner from '@/components/Main/Banner';
import { LECTURE_MAIN } from '@/constants/queryKeys';

// 메인 페이지
const Home = () => (
  <VStack w="100%" minH="100vh" spacing="50px" pb="100px">
    <MainBanner />
    <VStack w="60%" spacing="30px">
      <LectureSearch />
      <LectureList />
    </VStack>
  </VStack>
);

export default Home;

export const getServerSideProps = async () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  try {
    await queryClient.prefetchQuery(
      [LECTURE_MAIN, 'modifiedDate', '전체'],
      () => getMainLecture()
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
