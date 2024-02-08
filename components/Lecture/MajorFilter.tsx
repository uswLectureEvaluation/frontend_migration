import {
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

import { useGetMajorTypes } from '@/features/queries';
import useInput from '@/hooks/useInput';
import { ArrowDown, Star, XIcon } from '@/public/icon/icon';
import getRegExSearch from '@/utils/searchExpPattern';

import SuwikiButton from '../Common/Button';
import SearchInput from '../Common/SearchInput';

type Category = 'total' | 'favorite';

const MajorFilter = () => {
  const { query, push } = useRouter();
  const { data } = useGetMajorTypes();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { value: searchText, onChange } = useInput();

  const currentMajor = (query.majorType as string) || '전체';

  const [selectedCategory, setSelectedCategory] = useState<Category>('total');
  const [selectedMajor, setSelectedMajor] = useState<string>(currentMajor);
  const [majors, setMajors] = useState(['전체']);
  const [majorsView, setMajorsView] = useState(['전체']);

  const handleMajorFilter = () => {
    push({ query: { ...query, majorType: selectedMajor } }, undefined, {
      shallow: true,
    });
    onClose();
  };

  useEffect(() => {
    setMajors(['전체', ...(data?.data || [])]);
    setMajorsView(['전체', ...(data?.data || [])]);
  }, [data]);

  useEffect(() => {
    if (searchText) {
      const filteredMajors = [...majors].filter(
        (major) =>
          major.includes(searchText) || getRegExSearch(searchText, major)
      );
      setMajorsView(filteredMajors);
    } else {
      setMajorsView(majors);
    }
  }, [searchText]);

  return (
    <Flex
      minW="150px"
      p="9px 12px"
      pr="4px"
      border="1px solid"
      borderColor="lightgray.400"
      borderRadius="10px"
      justify="space-between"
      cursor="default"
      transition="background-color 0.3s"
      _hover={{ bg: 'lightgray.200' }}
      onClick={onOpen}
    >
      <Flex gap="10px" align="center">
        <Text fontSize="15px">개설학과</Text>
        <Text color="main.blue">{currentMajor}</Text>
      </Flex>
      <ArrowDown w="24px" h="24px" />

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay bg="rgba(0, 0, 0, 0.3)" />
        <ModalContent minW="100%" p="0" bg="none" boxShadow="none">
          <ModalBody w="100%" display="flex" justifyContent="center">
            <VStack
              w={{ base: '100%', sm: '500px' }}
              h={{ base: '550px', sm: '570px' }}
              bg="standard.white"
              borderRadius="15px"
              spacing="24px"
            >
              <Flex
                w="100%"
                p={{ base: '15px 20px', sm: '20px 28px' }}
                justify="space-between"
                align="center"
                borderBottom="1px solid"
                borderColor="lightgray.400"
              >
                <Text fontSize="18px">개설학과 검색</Text>
                <XIcon
                  w="22px"
                  h="22px"
                  cursor="pointer"
                  fill="standard.black"
                  onClick={onClose}
                />
              </Flex>
              <VStack
                w="100%"
                p={{ base: '0 20px', sm: '0 28px' }}
                spacing="36px"
              >
                <SearchInput
                  placeholder="개설학과를 검색하세요."
                  value={searchText}
                  onChange={onChange}
                />
                <VStack w="100%" spacing="8px" align="flex-start">
                  <Flex gap="14px" align="center">
                    <Text
                      color={
                        selectedCategory === 'total' ? 'unset' : 'lightgray.600'
                      }
                      transition="color 0.3s"
                      cursor="pointer"
                      onClick={() => setSelectedCategory('total')}
                    >
                      전체
                    </Text>
                    <Text
                      color={
                        selectedCategory === 'favorite'
                          ? 'unset'
                          : 'lightgray.600'
                      }
                      transition="color 0.3s"
                      cursor="pointer"
                      onClick={() => setSelectedCategory('favorite')}
                    >
                      즐겨찾기
                    </Text>
                  </Flex>
                  <VStack
                    id="majorList"
                    w="100%"
                    minH="250px"
                    maxH="250px"
                    p="10px 0"
                    spacing="0px"
                    border="1px solid"
                    borderColor="lightgray.400"
                    borderRadius="10px"
                    overflowY="auto"
                    sx={{
                      '&::-webkit-scrollbar': {
                        width: '5px',
                      },
                      '&::-webkit-scrollbar-thumb': {
                        bg: 'lightgray.400',
                        borderRadius: '24px',
                      },
                      '&::-webkit-scrollbar-thumb:hover': {
                        bg: 'lightgray.800',
                      },
                    }}
                  >
                    {majorsView?.map((major) => (
                      <MajorItem
                        key={major}
                        major={major}
                        selectedMajor={selectedMajor}
                        setSelectedMajor={setSelectedMajor}
                      />
                    ))}
                  </VStack>
                </VStack>
                <SuwikiButton
                  w={{ base: '100%', sm: '380px' }}
                  onClick={handleMajorFilter}
                >
                  확인
                </SuwikiButton>
              </VStack>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default MajorFilter;

const MajorItem = ({
  major,
  selectedMajor,
  setSelectedMajor,
}: {
  major: string;
  selectedMajor: string;
  setSelectedMajor: Dispatch<SetStateAction<string>>;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedMajor === major) {
      ref?.current?.scrollIntoView({ block: 'center' });
    }
  }, []);

  return (
    <Flex
      key={major}
      ref={ref}
      w="100%"
      p="8px 13px"
      gap="8px"
      align="center"
      transition="background-color 0.3s"
      _hover={{
        bg: 'lightgray.200',
      }}
      {...(selectedMajor === major && {
        bg: 'lightgray.200',
        color: 'main.blue',
      })}
      onClick={() => {
        setSelectedMajor(major);
      }}
    >
      <Star fill="lightgray.400" w="20px" h="20px" cursor="pointer" />
      <Text fontSize="16px">{major}</Text>
    </Flex>
  );
};
