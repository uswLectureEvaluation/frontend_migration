import { Flex, VStack } from '@chakra-ui/react';

import { useGetMainLectureList } from '@/features/queries';

import LectureCard from './LectureCard';

const LectureList = () => {
  const { data: lectures } = useGetMainLectureList();
  const evenLectures = lectures?.data.filter((_, i) => i % 2 !== 0);
  const oddLectures = lectures?.data.filter((_, i) => i % 2 === 0);

  return (
    <Flex w="100%" gap="20px" justify="space-between">
      <VStack w="100%" spacing="10px">
        {oddLectures?.map((lecture) => (
          <LectureCard key={lecture.id} lecture={lecture} />
        ))}
      </VStack>
      <VStack w="100%" spacing="10px">
        {evenLectures?.map((lecture) => (
          <LectureCard key={lecture.id} lecture={lecture} />
        ))}
      </VStack>
    </Flex>
  );
};

export default LectureList;
