/* eslint-disable react/require-default-props */
import { Box, Flex, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { useGetLectureList } from '@/features/queries';
import { LectureOptions } from '@/interfaces/lecture';

import LectureCard from './LectureCard';
import LectureListSkeleton from './LectureListSkeleton';

const LectureList = ({ isSearch }: { isSearch?: boolean }) => {
  const initialPage = 1;
  const { query } = useRouter();
  const {
    data: lectures,
    isLoading,
    isFetchingNextPage,
    ref,
  } = useGetLectureList(
    !!isSearch,
    initialPage,
    query.searchValue as string,
    query.option as LectureOptions,
    query.majorType as string
  );
  const totalLectures = lectures?.pages;

  return isLoading ? (
    <LectureListSkeleton />
  ) : (
    <VStack w="100%" spacing="16px">
      <VStack w="100%" spacing="16px" display={{ base: 'none', md: 'flex' }}>
        {totalLectures?.map((pages) => {
          const lectureData = pages?.response.data;
          const oddLectures = lectureData?.filter((_, i) => i % 2 === 0);
          const evenLectures = lectureData?.filter((_, i) => i % 2 !== 0);
          return (
            <VStack key={pages?.nextPage} w="100%" spacing="16px">
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
            </VStack>
          );
        })}
      </VStack>

      <VStack w="100%" spacing="16px" display={{ base: 'flex', md: 'none' }}>
        {totalLectures?.map((pages) => (
          <VStack key={pages?.nextPage} w="100%" spacing="16px">
            {pages?.response.data.map((lecture) => (
              <LectureCard key={lecture.id} lecture={lecture} />
            ))}
          </VStack>
        ))}
      </VStack>

      {isSearch && (
        <Box w="100%" ref={ref}>
          {isFetchingNextPage && <LectureListSkeleton />}
        </Box>
      )}
    </VStack>
  );
};

export default LectureList;
