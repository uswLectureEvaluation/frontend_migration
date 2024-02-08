import {
  Flex,
  Icon,
  Image,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import ROUTES from '@/constants/routes';
import useClickOutside from '@/hooks/useClickOutside';
import { List, XIcon } from '@/public/icon/icon';

const Header = () => {
  const { pathname } = useRouter();
  const mobileMenu = useDisclosure();
  const { ref } = useClickOutside(mobileMenu.onClose);

  return (
    <>
      <Flex
        as="header"
        w="100%"
        h="79px"
        p="20px 0"
        justify="center"
        align="center"
        bg="rgba(255, 255, 255, 0.6)"
        pos="fixed"
        top="0"
        left="0"
        backdropFilter="blur(15px)"
        borderBottom="1px solid"
        borderColor="lightgray.400"
        zIndex="100"
      >
        <Flex
          w={{ base: '90%', lg: '60%' }}
          justify="space-between"
          align="center"
        >
          <Link href="/" passHref>
            <Image
              alt="logo"
              src="/icon/logo.svg"
              width={{ base: 110, sm: 120 }}
              height={38}
            />
          </Link>
          <Flex
            display={{ base: 'none', sm: 'flex' }}
            gap="30px"
            align="center"
          >
            <Link href={ROUTES.NOTICE}>공지사항</Link>
            <Link href={ROUTES.LOGIN}>로그인</Link>
            <Link href={ROUTES.SIGNUP}>
              <Text color="main.blue">회원가입</Text>
            </Link>
          </Flex>
          <Icon
            as={mobileMenu.isOpen ? XIcon : List}
            display={{ base: 'flex', sm: 'none' }}
            w="28px"
            h="28px"
            fill="main.blue"
            onClick={mobileMenu.onToggle}
          />
        </Flex>
      </Flex>

      <VStack
        ref={ref}
        display={{ base: 'flex', sm: 'none' }}
        pos="fixed"
        p="24px"
        top="79px"
        w="200px"
        h="100vh"
        bg="rgba(255, 255, 255, 0.6)"
        boxShadow="0 0 2px 0 rgba(0, 0, 0, 0.1)"
        backdropFilter="blur(15px)"
        borderRadius="10px 0 0 0"
        zIndex="100"
        left={mobileMenu.isOpen ? 'calc(100% - 200px)' : '100%'}
        transition="all 0.3s ease"
        spacing="30px"
        align="flex-start"
        overflowY="auto"
        onClick={mobileMenu.onClose}
      >
        <Link href={ROUTES.NOTICE} passHref>
          <Text
            fontSize="15px"
            fontWeight={pathname === ROUTES.NOTICE ? '500' : '400'}
          >
            공지사항
          </Text>
        </Link>
        <Link href={ROUTES.LOGIN} passHref>
          <Text
            fontSize="15px"
            fontWeight={pathname === ROUTES.LOGIN ? '500' : '400'}
          >
            로그인
          </Text>
        </Link>
        <Link href={ROUTES.SIGNUP} passHref>
          <Text
            fontSize="15px"
            fontWeight={pathname === ROUTES.SIGNUP ? '500' : '400'}
            color="main.blue"
          >
            회원가입
          </Text>
        </Link>
      </VStack>
    </>
  );
};

export default Header;
