import { VStack } from '@chakra-ui/react';

import LectureList from '@/components/LectureList';
import LectureSearch from '@/components/LectureSearch';
import MainBanner from '@/components/Main/Banner';

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
