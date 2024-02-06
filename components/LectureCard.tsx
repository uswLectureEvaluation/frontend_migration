import { Flex, Text, VStack } from '@chakra-ui/react';

import Chip from './Common/Chip';

const LectureCard = () => (
  //   const { isOpen, onOpen, onClose } = useDisclosure();

  <VStack
    w="100%"
    p="14px 24px"
    border="1px solid"
    borderColor="lightgray.400"
    borderRadius="10px"
    spacing="0"
  >
    <Flex w="100%" align="center" justify="space-between" lineHeight="80%">
      <Text>데이터통신</Text>
      <Chip>전선</Chip>
    </Flex>
    <Text w="100%" fontSize="14px" color="darkgray.400">
      정보통신 | 변희정
    </Text>
  </VStack>
);
export default LectureCard;
