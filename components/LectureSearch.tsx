import {
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useRef } from 'react';

import { Search } from '@/public/icon/icon';

const LectureSearch = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const search = () => {
    if (inputRef.current) {
      console.log(inputRef.current.value);
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
      <InputGroup w="100%">
        <Input
          ref={inputRef}
          h="50px"
          variant="unstyled"
          borderBottom="2px solid"
          borderColor="lightgray.800"
          borderRadius="0"
          placeholder="강의명, 교수명으로 원하는 강의평가를 찾아보세요"
          fontSize="14px"
          onKeyDown={onEnterKeyDown}
        />
        <InputRightElement h="50px">
          <Search w="24px" h="24px" cursor="pointer" onClick={search} />
        </InputRightElement>
      </InputGroup>
    </VStack>
  );
};

export default LectureSearch;
