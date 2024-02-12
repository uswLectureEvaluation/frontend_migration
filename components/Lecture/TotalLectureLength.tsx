import { Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { useGetLectureList } from '@/features/queries';
import { LectureOptions } from '@/interfaces/lecture';

const TotalLectureLength = () => {
  const initialPage = 1;
  const { query } = useRouter();
  const { data: lectures } = useGetLectureList(
    true,
    initialPage,
    query.searchValue as string,
    query.option as LectureOptions,
    query.majorType as string
  );
  const totalLectureLength = lectures?.pages[0]?.response.count || 0;
  return (
    <Text display={{ base: 'none', sm: 'block' }}>
      총{' '}
      <Text as="span" color="main.blue" fontWeight="500">
        {totalLectureLength}
      </Text>
      건
    </Text>
  );
};

export default TotalLectureLength;
