import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputPorps,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputPorps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: InputProps) {
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
      />
    </FormControl>
  );
}
