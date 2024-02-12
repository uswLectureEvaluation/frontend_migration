import { Flex, Text, VStack } from '@chakra-ui/react';
import { GetServerSidePropsContext } from 'next';
import cookies from 'next-cookies';
import { dehydrate, QueryClient } from 'react-query';

import { getLectureDetailServer } from '@/apis/lecture';
import Chip from '@/components/Common/Chip';
import LectureSearch from '@/components/Lecture/LectureSearch';
import SEO from '@/components/SEO';
import { TOKEN_KEY } from '@/constants/auth';
import { LECTURE_DETAIL } from '@/constants/queryKeys';
import { useGetLectureDetail } from '@/features/queries';

const LectureDetail = ({ lectureId }: { lectureId: string }) => {
  const { data } = useGetLectureDetail(lectureId);
  const lecture = data?.data;

  return (
    <VStack w="100%" minH="100vh" spacing="50px" pb="100px">
      <SEO title={`${lecture?.lectureName} - 강의 정보`} />
      <VStack w={{ base: '90%', lg: '60%' }} pt="80px" spacing="30px">
        <LectureSearch />
        <VStack
          w="100%"
          p="23px 20px"
          spacing="2px"
          border="1px solid"
          borderColor="lightgray.400"
          borderRadius="15px"
          align="flex-start"
        >
          <Flex w="100%" align="center" justify="space-between">
            <Text fontSize="18px" fontWeight="500">
              {lecture?.lectureName}
            </Text>
            <Chip minW="42px" fontSize="14px" borderRadius="12px">
              {lecture?.lectureType}
            </Chip>
          </Flex>
          <Flex gap="6px" fontSize="14px">
            <Text>{lecture?.majorType}</Text>
            <Text color="lightgray.600">|</Text>
            <Text>{lecture?.professor}</Text>
          </Flex>
          <Flex gap="8px" fontSize="14px" pt="15px" wrap="wrap">
            {lecture?.semesterList.split(',').map((semester) => (
              <Chip
                key={semester}
                p="3px 12px"
                fontSize="14px"
                fontWeight="400"
                borderRadius="12px"
              >
                {semester}
              </Chip>
            ))}
          </Flex>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default LectureDetail;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  const allCookies = cookies(context);
  const accessToken = allCookies[TOKEN_KEY] as string;
  const lectureId = context.params?.lectureId as string;
  try {
    await queryClient.prefetchQuery([LECTURE_DETAIL, lectureId], () =>
      getLectureDetailServer(lectureId, accessToken)
    );
    return {
      props: {
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
        lectureId,
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
