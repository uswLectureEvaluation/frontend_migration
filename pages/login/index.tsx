import { Flex, Image, VStack } from '@chakra-ui/react';

import LoginForm from '@/components/Login/LoginForm';
import SEO from '@/components/SEO';

const Login = () => (
  <VStack w="100%" minH="100vh" spacing="50px" pb="100px">
    <SEO title="로그인 - 수위키" />
    <Flex
      w={{ base: '90%', lg: '60%' }}
      pt={{ base: '100px', md: '150px' }}
      gap="50px"
      align="center"
      justify="center"
    >
      <Image
        alt="auth_illust"
        src="/img/auth_illust.svg"
        display={{ base: 'none', md: 'block' }}
        width={{ base: '350px', md: '400px' }}
        height="auto"
      />
      <LoginForm />
    </Flex>
  </VStack>
);

export default Login;
