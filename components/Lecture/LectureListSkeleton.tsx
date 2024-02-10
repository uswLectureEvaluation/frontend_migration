import { Flex, VStack } from '@chakra-ui/react';

import { LectureCard as LectureCardType } from '@/interfaces/lecture';

import LectureCard from './LectureCard';

const LectureListSkeleton = () => (
  <VStack w="100%" spacing="0px">
    <Flex
      display={{ base: 'none', md: 'flex' }}
      w="100%"
      gap="16px"
      justify="space-between"
    >
      <VStack w="100%" spacing="16px">
        {oddList?.map((lecture) => (
          <LectureCard key={lecture.id} lecture={lecture} isLoading />
        ))}
      </VStack>
      <VStack w="100%" spacing="16px">
        {evenList?.map((lecture) => (
          <LectureCard key={lecture.id} lecture={lecture} isLoading />
        ))}
      </VStack>
    </Flex>

    <VStack display={{ base: 'flex', md: 'none' }} w="100%" spacing="16px">
      {lectureDummyDataList.map((lecture) => (
        <LectureCard key={lecture.id} lecture={lecture} isLoading />
      ))}
    </VStack>
  </VStack>
);

export default LectureListSkeleton;

const lectureDummyData: LectureCardType = {
  id: -1,
  semesterList: '0000-0',
  professor: '로딩중',
  lectureType: '로딩',
  lectureName: '로딩중입니다',
  lectureTotalAvg: 0,
  lectureSatisfactionAvg: 0,
  lectureHoneyAvg: 0,
  lectureLearningAvg: 0,
  majorType: '로딩',
};

const lectureDummyDataList: LectureCardType[] = Array.from(
  { length: 10 },
  (_, i) => ({
    ...lectureDummyData,
    id: i,
  })
);

const oddList = lectureDummyDataList.filter((_, i) => i % 2 === 0);
const evenList = lectureDummyDataList.filter((_, i) => i % 2 !== 0);
