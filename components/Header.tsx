import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => (
  <Flex
    as="header"
    w="100%"
    p="20px 0"
    justify="center"
    align="center"
    pos="sticky"
    top="0"
    backdropFilter="blur(10px)"
    borderBottom="1px solid"
    borderColor="lightgray.400"
    zIndex="100"
  >
    <Flex w="60%" justify="space-between" align="center">
      <Image alt="logo" src="/icon/logo.svg" width={120} height={38} />
      <Flex gap="30px" align="center">
        <Link href="/notice">공지사항</Link>
        <Link href="/login">로그인</Link>
        <Link href="/signup">
          <Text color="main.blue">회원가입</Text>
        </Link>
      </Flex>
    </Flex>
  </Flex>
);

export default Header;
