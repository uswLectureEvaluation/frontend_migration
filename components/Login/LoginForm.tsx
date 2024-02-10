import { Flex, FormControl, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';

import ROUTES from '@/constants/routes';
import { useLogin } from '@/features/mutations';
import { UserLoginFormValues } from '@/interfaces/user';

import SuwikiButton from '../Common/Button';
import SuwikiInput from '../Common/Input';

const LoginForm = () => {
  const { push } = useRouter();
  const { control, handleSubmit } = useForm<UserLoginFormValues>();
  const { mutate: login } = useLogin(() => {
    push(ROUTES.MAIN);
  });

  const handleLogin: SubmitHandler<UserLoginFormValues> = async (data) => {
    login(data);
  };

  return (
    <FormControl
      as="form"
      w="100%"
      maxW="400px"
      onSubmit={handleSubmit(handleLogin)}
    >
      <VStack w="100%" spacing="20px" align="flex-start" justify="center">
        <Text fontSize="24px" fontWeight="500">
          로그인
        </Text>
        <VStack w="100%" spacing="10px" align="flex-start">
          <SuwikiInput
            control={control}
            name="loginId"
            type="id"
            defaultValue=""
            placeholder="아이디"
          />
          <SuwikiInput
            control={control}
            name="password"
            type="password"
            defaultValue=""
            placeholder="비밀번호"
          />
          <Flex w="100%" justify="flex-end" gap="8px">
            <Link href="/find-id" passHref>
              <Text fontSize="12px" textDecor="underline">
                아이디 찾기
              </Text>
            </Link>
            <Link href="/find-password" passHref>
              <Text fontSize="12px" textDecor="underline">
                비밀번호 찾기
              </Text>
            </Link>
          </Flex>
        </VStack>
        <SuwikiButton w="100%" type="submit">
          로그인
        </SuwikiButton>
      </VStack>
    </FormControl>
  );
};

export default LoginForm;
