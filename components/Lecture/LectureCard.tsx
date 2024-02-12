/* eslint-disable react/require-default-props */
import { Flex, Text, useDisclosure, VStack } from '@chakra-ui/react';
import Link from 'next/link';

import ROUTES from '@/constants/routes';
import { LectureCard as Lecture } from '@/interfaces/lecture';

import Chip from '../Common/Chip';
import Stars from '../Common/Stars';

const LectureCard = ({
  lecture,
  isLoading,
}: {
  lecture: Lecture;
  isLoading?: boolean;
}) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Link
      href={`${ROUTES.LECTURE}?id=${lecture.id}`}
      passHref
      style={{ width: '100%' }}
    >
      <VStack
        w="100%"
        border="1px solid"
        borderColor="lightgray.400"
        borderRadius="10px"
        spacing="0"
      >
        <VStack
          w="100%"
          p="14px 24px"
          spacing="0"
          filter={isLoading ? 'blur(4px)' : '0'}
        >
          <Flex w="100%" align="center" justify="space-between" gap="10px">
            <Text fontSize="17.6px" noOfLines={1}>
              {lecture.lectureName}
            </Text>
            <Chip minW="42px">{lecture.lectureType}</Chip>
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
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                onToggle();
              }}
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
              <Text color="main.blue">
                {lecture.lectureHoneyAvg.toFixed(1)}
              </Text>
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
    </Link>
  );
};
export default LectureCard;
