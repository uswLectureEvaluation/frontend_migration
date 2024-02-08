/* eslint-disable react/require-default-props */
import { Flex, Image, Text, useDisclosure, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import useClickOutside from '@/hooks/useClickOutside';
import { LectureOptions } from '@/interfaces/lecture';
import { ArrowDown } from '@/public/icon/icon';

const options: {
  label: string;
  short: string;
  value: LectureOptions;
  icon: string;
}[] = [
  {
    label: '최근 올라온 강의',
    short: '날짜',
    value: 'modifiedDate',
    icon: '/icon/icon_color_fire_36.svg',
  },
  {
    label: '꿀 강의',
    short: '꿀강',
    value: 'lectureHoneyAvg',
    icon: '/icon/icon_color_bee_36.svg',
  },
  {
    label: '만족도가 높은 강의',
    short: '만족도',
    value: 'lectureSatisfactionAvg',
    icon: '/icon/icon_color_thumbs_36.svg',
  },
  {
    label: '배울게 많은 강의',
    short: '배움',
    value: 'lectureLearningAvg',
    icon: '/icon/icon_color_book_36.svg',
  },
  {
    label: 'BEST 강의',
    short: '종합',
    value: 'lectureTotalAvg',
    icon: '/icon/icon_color_best_36.svg',
  },
];

const OptionSort = ({ icon }: { icon?: boolean }) => {
  const { query, push } = useRouter();
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { ref } = useClickOutside(onClose);

  const currentOptionValue = (query.option as LectureOptions) || 'modifiedDate';
  const currentOption = options.find(
    (option) => option.value === currentOptionValue
  );
  const currentOptionIcon = currentOption?.icon;
  const currentOptionLabel = icon ? currentOption?.label : currentOption?.short;

  const handleOptionFilter = (option: LectureOptions) => {
    push({ query: { ...query, option } }, undefined, { shallow: true });
    onClose();
  };

  return (
    <Flex
      ref={ref}
      minW={icon ? '180px' : '150px'}
      p="9px 12px"
      pr="4px"
      border="1px solid"
      borderColor="lightgray.400"
      borderRadius="10px"
      justify="space-between"
      cursor="default"
      transition="background-color 0.3s"
      _hover={{ bg: 'lightgray.200' }}
      pos="relative"
      onClick={onToggle}
    >
      <Flex gap="10px" align="center">
        {icon ? (
          <Image src={currentOptionIcon} w="24px" h="24px" />
        ) : (
          <Text fontSize="15px">정렬</Text>
        )}
        <Text
          fontSize={icon ? '14px' : '16px'}
          color={icon ? 'unset' : 'main.blue'}
        >
          {currentOptionLabel}
        </Text>
      </Flex>
      <ArrowDown
        w="24px"
        h="24px"
        transform={isOpen ? 'rotate(180deg)' : 'unset'}
        transition="transform 0.3s"
      />

      {isOpen && (
        <VStack
          w="180px"
          p="5px"
          border="1px solid"
          borderColor="lightgray.400"
          borderRadius="10px"
          spacing="0"
          pos="absolute"
          top="50px"
          left="0"
          bg="white"
        >
          {options.map((option) => (
            <Flex
              key={option.value}
              w="100%"
              p="9px 12px"
              borderRadius="8px"
              gap="10px"
              align="center"
              cursor="pointer"
              _hover={{ bg: 'lightgray.200' }}
              {...(option.value === currentOptionValue && {
                bg: '#DAECFF',
              })}
              onClick={() => handleOptionFilter(option.value)}
            >
              {icon && <Image src={option.icon} w="24px" h="24px" />}
              <Text
                fontSize={icon ? '14px' : '15px'}
                color={
                  option.value === currentOptionValue ? 'main.blue' : 'unset'
                }
              >
                {icon ? option.label : option.short}
              </Text>
            </Flex>
          ))}
        </VStack>
      )}
    </Flex>
  );
};

export default OptionSort;
