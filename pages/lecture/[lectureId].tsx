import { VStack } from '@chakra-ui/react';
import { GetServerSidePropsContext } from 'next';

import LectureInfo from '@/components/Lecture/LectureInfo';
import LectureSearch from '@/components/Lecture/LectureSearch';
import SEO from '@/components/SEO';
import { useGetLectureDetail } from '@/features/queries';

const LectureDetail = ({ lectureId }: { lectureId: string }) => {
  const { data } = useGetLectureDetail(lectureId);
  const lecture = data?.data;

  return (
    <VStack w="100%" minH="100vh" spacing="50px" pb="100px">
      <SEO title={`${lecture?.lectureName} - 강의 정보`} />
      <VStack w={{ base: '90%', lg: '60%' }} pt="80px" spacing="30px">
        <LectureSearch />
        <LectureInfo lectureId={lectureId} />
      </VStack>
    </VStack>
  );
};

export default LectureDetail;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => ({
  props: {
    lectureId: context.params?.lectureId,
  },
});
