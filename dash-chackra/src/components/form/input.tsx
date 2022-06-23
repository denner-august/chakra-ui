import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputPorps,
} from "@chakra-ui/react";

import { forwardRef, ForwardRefRenderFunction } from "react";

interface InputProps extends ChakraInputPorps {
  name: string;
  label?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, ...rest },
  ref
) => {
  return (
    <FormControl>
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
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
