/* eslint-disable react/require-default-props */
import { Input } from '@chakra-ui/react';
import { useController, UseControllerProps } from 'react-hook-form';

interface SuwikiInputProps extends UseControllerProps<any, any> {
  type: string;
  placeholder?: string;
  isDisabled?: boolean;
  width?: string | number;
  height?: string | number;
}

const SuwikiInput = ({
  type,
  placeholder,
  isDisabled,
  width,
  height,
  ...props
}: SuwikiInputProps) => {
  const { field } = useController(props);

  return (
    <Input
      id={props.name}
      type={type}
      variant="unstyled"
      p="15px 0"
      borderBottom="1px solid"
      borderColor="lightgray.400"
      borderRadius="0"
      _placeholder={{ color: 'lightgray.600' }}
      isDisabled={isDisabled}
      width={width}
      height={height}
      placeholder={placeholder}
      {...field}
    />
  );
};

export default SuwikiInput;
