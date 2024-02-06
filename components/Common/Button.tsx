import { Button, ButtonProps } from '@chakra-ui/react';

interface SuwikiButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const SuwikiButton = ({ children, ...props }: SuwikiButtonProps) => (
  <Button
    variant="unstyled"
    w="100%"
    h="48px"
    bg="main.blue"
    color="standard.white"
    fontWeight="500"
    borderRadius="15px"
    {...props}
  >
    {children}
  </Button>
);

export default SuwikiButton;
