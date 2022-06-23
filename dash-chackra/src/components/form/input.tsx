import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputPorps,
} from "@chakra-ui/react";

import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputPorps {
  name: string;
  label?: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        name={name}
        id={name}
        type="email"
        focusBorderColor="pink.500"
        bgColor={"gray.900"}
        variant="filled"
        _hover={{ bg: "gray.900" }}
        size="lg"
        {...rest}
        ref={ref}
      />

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
