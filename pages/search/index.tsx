import { Flex, VStack } from '@chakra-ui/react';
import { GetServerSidePropsContext } from 'next';

import LectureList from '@/components/Lecture/LectureList';
import LectureSearch from '@/components/Lecture/LectureSearch';
import MajorFilter from '@/components/Lecture/MajorFilter';
import OptionSort from '@/components/Lecture/OptionSort';
import SEO from '@/components/SEO';

const Search = ({ searchValue }: { searchValue: string }) => (
  <VStack w="100%" minH="100vh" spacing="50px" pb="100px">
    <SEO
      title={
        searchValue
          ? `${searchValue} - 수위키 검색`
          : '수위키 - 강의평가의 모든 것, SUWIKI'
      }
    />
    <VStack w={{ base: '90%', lg: '60%' }} pt="80px" spacing="30px">
      <LectureSearch />
      <VStack w="100%" pb="10px" spacing="10px" align="flex-start">
        <Flex gap="5px" align="center">
          <MajorFilter />
          <OptionSort />
        </Flex>
        <LectureList isSearch />
      </VStack>
    </VStack>
  </VStack>
);

export default Search;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const searchValue = context.query.searchValue as string;

  return {
    props: {
      searchValue: searchValue || '',
    },
  };
};
