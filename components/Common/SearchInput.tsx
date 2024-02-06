/* eslint-disable react/require-default-props */
import {
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from '@chakra-ui/react';

import { Search } from '@/public/icon/icon';

interface SearchInputProps extends InputProps {
  value: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
}

const SearchInput = ({
  onClick,
  onChange,
  value,
  ...props
}: SearchInputProps) => (
  <InputGroup w="100%">
    <Input
      p="5px 0"
      h="45px"
      variant="unstyled"
      borderBottom="1.5px solid"
      borderColor="lightgray.800"
      borderRadius="0"
      fontSize="16px"
      _placeholder={{ color: 'lightgray.800' }}
      value={value}
      onChange={onChange}
      {...props}
    />
    <InputRightElement h="45px">
      <Search w="24px" h="24px" cursor="pointer" onClick={onClick} />
    </InputRightElement>
  </InputGroup>
);

export default SearchInput;
