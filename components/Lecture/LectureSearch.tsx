import { Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import ROUTES from '@/constants/routes';
import useInput from '@/hooks/useInput';

import SearchInput from '../Common/SearchInput';

const LectureSearch = () => {
  const { query, push } = useRouter();
  const { value, onChange } = useInput(query.searchValue as string);

  const search = () => {
    if (value) {
      push({
        pathname: ROUTES.SEARCH,
        query: { ...query, searchValue: value },
      });
    }
  };

  const onEnterKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      search();
    }
  };

  return (
    <VStack w="100%" spacing="15px" align="flex-start">
      <Text fontSize="20px" fontWeight="500">
        강의평가 검색
      </Text>
      <SearchInput
        placeholder="강의명, 교수명으로 원하는 강의평가를 찾아보세요"
        _placeholder={{
          color: 'lightgray.800',
          fontSize: { base: '14px', sm: '16px' },
        }}
        value={value}
        onChange={onChange}
        onKeyDown={onEnterKeyDown}
        onClick={search}
      />
    </VStack>
  );
};

export default LectureSearch;
