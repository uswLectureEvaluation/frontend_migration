import { Flex, Text, VStack } from '@chakra-ui/react';

import { useGetLectureDetail } from '@/features/queries';

import Chip from '../Common/Chip';
import LectureInfoSkeleton from './LectureInfoSkeleton';

interface LectureDetailProps {
  lectureId: string;
}

const team = {
  0: (
    <Text fontSize="15px" fontWeight="500" color="main.blue">
      없음
    </Text>
  ),
  1: (
    <Text fontSize="15px" fontWeight="500" color="main.purple">
      있음
    </Text>
  ),
};
const homework = {
  0: (
    <Text fontSize="15px" fontWeight="500" color="main.blue">
      없음
    </Text>
  ),
  1: (
    <Text fontSize="15px" fontWeight="500">
      보통
    </Text>
  ),
  2: (
    <Text fontSize="15px" fontWeight="500" color="main.purple">
      많음
    </Text>
  ),
};
const difficulty = {
  0: (
    <Text fontSize="15px" fontWeight="500" color="main.blue">
      너그러움
    </Text>
  ),
  1: (
    <Text fontSize="15px" fontWeight="500">
      보통
    </Text>
  ),
  2: (
    <Text fontSize="15px" fontWeight="500" color="main.purple">
      까다로움
    </Text>
  ),
};

type Team = 0 | 1;
type Homework = 0 | 1 | 2;
type Difficulty = 0 | 1 | 2;

const LectureInfo = ({ lectureId }: LectureDetailProps) => {
  const { data, isLoading } = useGetLectureDetail(lectureId);
  const lecture = data?.data;

  const teamAvg = Math.floor(lecture?.lectureTeamAvg ?? 0) as Team;
  const homeworkAvg = Math.floor(lecture?.lectureHomeworkAvg ?? 0) as Homework;
  const difficultyAvg = Math.floor(
    lecture?.lectureDifficultyAvg ?? 0
  ) as Difficulty;

  return isLoading ? (
    <LectureInfoSkeleton />
  ) : (
    <VStack
      w="100%"
      p="25px"
      spacing="2px"
      border="1px solid"
      borderColor="lightgray.400"
      borderRadius="15px"
      align="flex-start"
    >
      <Flex w="100%" align="center" justify="space-between" gap="10px">
        <Text fontSize="18px" fontWeight="500" noOfLines={1}>
          {lecture?.lectureName}
        </Text>
        <Chip minW="42px" fontSize="14px" borderRadius="12px">
          {lecture?.lectureType}
        </Chip>
      </Flex>
      <Flex gap="6px" fontSize="14px">
        <Text>{lecture?.majorType}</Text>
        <Text color="lightgray.600">|</Text>
        <Text>{lecture?.professor}</Text>
      </Flex>
      <Flex gap="8px" fontSize="14px" pt="15px" wrap="wrap">
        {lecture?.semesterList.split(',').map((semester) => (
          <Chip
            key={semester}
            p="3px 12px"
            fontSize="14px"
            fontWeight="400"
            borderRadius="12px"
          >
            {semester}
          </Chip>
        ))}
      </Flex>
      <Flex gap="40px" pt="25px" wrap="wrap">
        <VStack spacing="15px">
          <Flex w="120px" align="center" justify="space-between">
            <Text fontSize="14px">꿀강지수</Text>
            <Text fontSize="15px" color="lightgray.600" fontWeight="500">
              <Text as="span" color="main.blue">
                {lecture?.lectureHoneyAvg.toFixed(1)}
              </Text>
              /5
            </Text>
          </Flex>
          <Flex w="120px" align="center" justify="space-between">
            <Text fontSize="14px">배움지수</Text>
            <Text fontSize="15px" color="lightgray.600" fontWeight="500">
              <Text as="span" color="main.blue">
                {lecture?.lectureLearningAvg.toFixed(1)}
              </Text>
              /5
            </Text>
          </Flex>
          <Flex w="120px" align="center" justify="space-between">
            <Text fontSize="14px">만족도</Text>
            <Text fontSize="15px" color="lightgray.600" fontWeight="500">
              <Text as="span" color="main.blue">
                {lecture?.lectureSatisfactionAvg.toFixed(1)}
              </Text>
              /5
            </Text>
          </Flex>
        </VStack>
        <VStack spacing="15px">
          <Flex w="120px" align="center" justify="space-between">
            <Text fontSize="14px">조모임</Text>
            {team[teamAvg]}
          </Flex>
          <Flex w="120px" align="center" justify="space-between">
            <Text fontSize="14px">과제</Text>
            {homework[homeworkAvg]}
          </Flex>
          <Flex w="120px" align="center" justify="space-between">
            <Text fontSize="14px">학점</Text>
            {difficulty[difficultyAvg]}
          </Flex>
        </VStack>
      </Flex>
    </VStack>
  );
};

export default LectureInfo;
