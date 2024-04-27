import { Flex, Skeleton, SkeletonText, VStack } from '@chakra-ui/react';

const LectureInfoSkeleton = () => (
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
      <SkeletonText skeletonHeight="27px" noOfLines={1}>
        강의명입니다 강의명입니다
      </SkeletonText>
      <Skeleton borderRadius="12px">전공 전공</Skeleton>
    </Flex>
    <Flex gap="6px">
      <SkeletonText skeletonHeight="21px" noOfLines={1}>
        전공과 교수명
      </SkeletonText>
    </Flex>
    <Flex gap="8px" pt="15px" wrap="wrap">
      <Skeleton w="69px" h="27px" borderRadius="12px">
        2021-1
      </Skeleton>
      <Skeleton w="69px" h="27px" borderRadius="12px">
        2021-1
      </Skeleton>
      <Skeleton w="69px" h="27px" borderRadius="12px">
        2021-1
      </Skeleton>
    </Flex>
    <Flex gap="40px" pt="25px" wrap="wrap">
      <VStack spacing="15px">
        <Flex w="120px" align="center" justify="space-between">
          <SkeletonText skeletonHeight="22.5px" noOfLines={1}>
            꿀강지수
          </SkeletonText>
          <SkeletonText skeletonHeight="22.5px" noOfLines={1}>
            0.0 /5
          </SkeletonText>
        </Flex>
        <Flex w="120px" align="center" justify="space-between">
          <SkeletonText noOfLines={1} skeletonHeight="22.5px">
            배움지수
          </SkeletonText>
          <SkeletonText noOfLines={1} skeletonHeight="22.5px">
            0.0 /5
          </SkeletonText>
        </Flex>
        <Flex w="120px" align="center" justify="space-between">
          <SkeletonText noOfLines={1} skeletonHeight="22.5px">
            만족도
          </SkeletonText>
          <SkeletonText noOfLines={1} skeletonHeight="22.5px">
            0.0 /5
          </SkeletonText>
        </Flex>
      </VStack>
      <VStack spacing="15px">
        <Flex w="120px" align="center" justify="space-between">
          <SkeletonText noOfLines={1} skeletonHeight="22.5px">
            조모임
          </SkeletonText>
          <SkeletonText noOfLines={1} skeletonHeight="22.5px">
            없음
          </SkeletonText>
        </Flex>
        <Flex w="120px" align="center" justify="space-between">
          <SkeletonText noOfLines={1} skeletonHeight="22.5px">
            과제
          </SkeletonText>
          <SkeletonText noOfLines={1} skeletonHeight="22.5px">
            없음
          </SkeletonText>
        </Flex>
        <Flex w="120px" align="center" justify="space-between">
          <SkeletonText noOfLines={1} skeletonHeight="22.5px">
            학점
          </SkeletonText>
          <SkeletonText noOfLines={1} skeletonHeight="22.5px">
            없음
          </SkeletonText>
        </Flex>
      </VStack>
    </Flex>
  </VStack>
);

export default LectureInfoSkeleton;
