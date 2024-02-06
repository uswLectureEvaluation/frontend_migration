import { Flex, VStack } from '@chakra-ui/react';

import LectureCard from '@/components/LectureCard';
import LectureSearch from '@/components/LectureSearch';
import MainBanner from '@/components/Main/Banner';

// 메인 페이지
const Home = () => (
  <VStack w="100%" minH="100vh" spacing="50px" pb="100px">
    <MainBanner />
    <VStack w="60%">
      <LectureSearch />
      <Flex w="100%" justify="space-between" gap="24px">
        <LectureCard />
        <LectureCard />
      </Flex>
    </VStack>
  </VStack>
);

export default Home;
