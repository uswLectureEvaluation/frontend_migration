import { Flex, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { useGetMainLectureList } from '@/features/queries';

import LectureCard from './LectureCard';

const LectureList = () => {
  const { query } = useRouter();
  const { data: lectures } = useGetMainLectureList(
    undefined,
    query.majorType as string
  );
  const evenLectures = lectures?.data.filter((_, i) => i % 2 !== 0);
  const oddLectures = lectures?.data.filter((_, i) => i % 2 === 0);

  return (
    <Flex w="100%" gap="16px" justify="space-between">
      <VStack w="100%" spacing="16px">
        {oddLectures?.map((lecture) => (
          <LectureCard key={lecture.id} lecture={lecture} />
        ))}
      </VStack>
      <VStack w="100%" spacing="16px">
        {evenLectures?.map((lecture) => (
          <LectureCard key={lecture.id} lecture={lecture} />
        ))}
      </VStack>
    </Flex>
  );
};

export default LectureList;
