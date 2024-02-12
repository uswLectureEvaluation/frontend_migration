/* eslint-disable react/require-default-props */
import {
  Flex,
  Icon,
  keyframes,
  Text,
  useBoolean,
  VStack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { Toast } from '@/atoms/toast';
import { Bell, CheckCircle, Error, Warning, XIcon } from '@/public/icon/icon';

const typeBg = {
  success: 'rgba(211, 248, 216, 0.8)',
  error: 'rgba(247, 207, 201, 0.8)',
  warning: 'rgba(251, 232, 191, 0.8)',
  info: 'rgba(209, 227, 255, 0.8)',
};

const typeIcon = {
  success: CheckCircle,
  error: Error,
  warning: Warning,
  info: Bell,
};

const SuwikiToast = (props: Toast) => {
  const { id, title, description, description2, type, duration, selfRemove } =
    props;
  const [isClosing, setIsClosing] = useBoolean();
  const [isHover, setHover] = useBoolean();
  const [isDuration, setDuration] = useState(duration ?? 3000);

  const viewSectionDisplay = keyframes`
    from {
      height: 0;
    }
    to {
      height: ${description2 ? '100px' : '80px'};
    }
    `;

  const viewSectionDisable = keyframes`
    from {
      height: ${description2 ? '100px' : '80px'};
    }
    40%{
      height: ${description2 ? '100px' : '80px'};
    }
    to {
      height: 0;
    }
    `;

  const showBox = keyframes`
    from {
      opacity: 0;
      scale: 0;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  `;

  const hideBox = keyframes`
    from {
      right: 0;
      opacity: 1;
    }
    to {
      right: -100%;
      opacity: 0;
    }
  `;

  const hoverAction = (e: string) => {
    if (e === 'in') {
      setHover.on();
    } else {
      setHover.off();
    }
  };

  useEffect(() => {
    const setExistTimeout = setInterval(() => {
      if (isDuration && isDuration <= 100) {
        setIsClosing.on();
      } else if (!isDuration) {
        setIsClosing.on();
      } else if (!isHover) {
        setDuration(isDuration - 100);
      }
    }, 100);

    return () => {
      clearInterval(setExistTimeout);
    };
  }, [isDuration, isHover]);

  useEffect(() => {
    const removeTimer = setTimeout(() => {
      if (isClosing) {
        if (selfRemove) selfRemove(id);
      }
    }, 500);

    return () => {
      clearTimeout(removeTimer);
    };
  }, [isClosing]);

  return (
    <Flex
      h="0px"
      overflow="hidden"
      flexDir="row-reverse"
      borderRadius="10px"
      align="flex-end"
      animation={
        isClosing
          ? `1s forwards ${viewSectionDisable}`
          : `0.5s forwards ${viewSectionDisplay}`
      }
    >
      <Flex
        minW="300px"
        maxWidth="325px"
        justify="space-between"
        p="12px"
        pr="24px"
        borderRadius="10px"
        bg={typeBg[type]}
        backdropFilter="blur(12px)"
        boxShadow="0px 5px 15px 0px rgba(0, 0, 0, 0.1)"
        gap="10px"
        pos="relative"
        overflow="hidden"
        animation={`0.5s forwards ${isClosing ? hideBox : showBox}`}
        transition="all 0.2s ease"
        onMouseOver={() => {
          hoverAction('in');
        }}
        onMouseLeave={() => {
          hoverAction('out');
        }}
        _hover={{
          maxWidth: '100%',
          marginRight: '0px',
        }}
        className="hover-animated-group"
      >
        <Icon as={typeIcon[type]} w="13px" h="17px" />
        <VStack align="flex-start" w="100%">
          <Text fontSize="14px" fontWeight="600">
            {title}
          </Text>
          <Text fontSize="13px">
            <Text noOfLines={1}>{description}</Text>
            {description2 && description2}
          </Text>
        </VStack>
        <XIcon
          w="10px"
          h="16px"
          pos="absolute"
          top="10px"
          right="12px"
          cursor="pointer"
          fill="#000"
          onClick={setIsClosing.on}
        />
      </Flex>
    </Flex>
  );
};

export default SuwikiToast;
