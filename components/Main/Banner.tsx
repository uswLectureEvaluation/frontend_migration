import { Flex, Image, Text, VStack } from '@chakra-ui/react';

const MainBanner = () => (
  <Flex w="100%" p="110px 0" bg="lightgray.200" justify="center" pos="relative">
    <Flex w="60%" justify="space-between" align="center">
      <VStack align="flex-start">
        <Text fontSize="20px" fontWeight="500" lineHeight="1.2">
          수위키, <br />
          강의평가의 모든 것
        </Text>
        <Text>강의평가의 모든 것 수위키</Text>
      </VStack>
      <Image
        alt="banner_illust"
        src="/img/illust_banner.png"
        width="420px"
        height="auto"
        pos="absolute"
        right="20%"
        top="0"
      />
    </Flex>
  </Flex>
);

export default MainBanner;
