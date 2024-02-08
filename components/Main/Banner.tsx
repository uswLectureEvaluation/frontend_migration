import { Flex, Image, Text, VStack } from '@chakra-ui/react';

const MainBanner = () => (
  <Flex
    display={{ base: 'none', sm: 'flex' }}
    w="100%"
    p="110px 0"
    bg="lightgray.200"
    justify="center"
    pos="relative"
  >
    <Flex w={{ base: '90%', lg: '60%' }} justify="space-between" align="center">
      <VStack align="flex-start">
        <Text
          fontSize={{ base: '25px', lg: '20px' }}
          fontWeight="500"
          lineHeight="1.2"
        >
          수위키, <br />
          강의평가의 모든 것
        </Text>
        <Text fontSize={{ base: '18px', lg: '16px' }}>
          강의평가의 모든 것 수위키
        </Text>
      </VStack>
      <Image
        alt="banner_illust"
        src="/img/illust_banner.png"
        width={{ base: '350px', md: '420px' }}
        height="auto"
        pos="absolute"
        right={{ base: '0%', lg: '20%' }}
        top={{ base: '5%', md: '0' }}
      />
    </Flex>
  </Flex>
);

export default MainBanner;
