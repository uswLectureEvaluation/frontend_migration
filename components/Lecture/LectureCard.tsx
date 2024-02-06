import { Flex, Text, useDisclosure, VStack } from '@chakra-ui/react';

import { LectureCard as Lecture } from '@/interfaces/lecture';

import Chip from '../Common/Chip';
import Stars from '../Common/Stars';

const LectureCard = ({ lecture }: { lecture: Lecture }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <VStack
      w="100%"
      border="1px solid"
      borderColor="lightgray.400"
      borderRadius="10px"
      spacing="0"
    >
      <VStack w="100%" p="14px 24px" spacing="0">
        <Flex w="100%" align="center" justify="space-between" lineHeight="80%">
          <Text fontSize="17.6px">{lecture.lectureName}</Text>
          <Chip>{lecture.lectureType}</Chip>
        </Flex>
        <Text w="100%" fontSize="14px" color="darkgray.400">
          {lecture.majorType} | {lecture.professor}
        </Text>
        <Flex w="100%" pt="7px" gap="4px" align="flex-end">
          <Stars value={lecture.lectureTotalAvg} />
          <Text fontSize="18px" lineHeight="1.1" color="main.blue">
            {lecture.lectureTotalAvg.toFixed(1)}
          </Text>
          <Text
            pl="2px"
            fontSize="12px"
            color="darkgray.400"
            textDecor="underline"
            cursor="pointer"
            onClick={onToggle}
          >
            {isOpen ? '간략히' : '자세히'}
          </Text>
        </Flex>
      </VStack>
      {isOpen && (
        <Flex
          w="100%"
          p="12px 24px"
          gap="24px"
          borderTop="1px solid"
          borderColor="lightgray.400"
          align="center"
        >
          <Flex gap="10px" align="center">
            <Text fontSize="13px">만족도</Text>
            <Text color="main.blue">
              {lecture.lectureSatisfactionAvg.toFixed(1)}
            </Text>
          </Flex>
          <Flex gap="10px" align="center">
            <Text fontSize="13px">꿀강지수</Text>
            <Text color="main.blue">{lecture.lectureHoneyAvg.toFixed(1)}</Text>
          </Flex>
          <Flex gap="10px" align="center">
            <Text fontSize="13px">배움지수</Text>
            <Text color="main.blue">
              {lecture.lectureLearningAvg.toFixed(1)}
            </Text>
          </Flex>
        </Flex>
      )}
    </VStack>
  );
};
export default LectureCard;
