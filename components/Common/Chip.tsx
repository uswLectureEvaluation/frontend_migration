import { Box, BoxProps } from '@chakra-ui/react';

interface ChipProps extends BoxProps {
  children: React.ReactNode;
}

const Chip = ({ children, ...props }: ChipProps) => (
  <Box
    p="5px 10px"
    bg="lightgray.200"
    borderRadius="10px"
    fontSize="12px"
    fontWeight="500"
    {...props}
  >
    {children}
  </Box>
);

export default Chip;
