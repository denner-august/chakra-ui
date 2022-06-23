import { Flex, Button, Stack } from "@chakra-ui/react";
import { Input } from "../components/form/input";

import { SubmitHandler, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type SignInformData = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    email: yup
      .string()
      .required("Digite um email valido")
      .email()
      .max(40, "limite de caracteres permitido"),
    password: yup
      .string()
      .required("digite uma senha")
      .min(4, "digite no minimo 4 letras")
      .max(40, "limite maximo de caracteres"),
  })
  .required();

export default function Home() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const { errors } = formState;

  const handleSignin: SubmitHandler<SignInformData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };

  return (
    <div>
      <Flex
        width={"100vw"}
        height={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex
          as="form"
          width={"100%"}
          maxWidth={360}
          bg="gray.800"
          p="8"
          borderRadius={8}
          flexDir={"column"}
          onSubmit={handleSubmit(handleSignin)}
        >
          <Stack spacing={5}>
            <Input
              {...register("email")}
              role="email"
              name="email"
              label="Email"
              type="email"
              placeholder="Digite seu email"
            />
            <p>{errors.email?.message}</p>

            <Input
              {...register("password")}
              name="password"
              label="Password"
              type="password"
              maxLength={15}
              placeholder="Digite sua senha"
            />
            <p>{errors.password?.message}</p>
          </Stack>

          <Button
            role="submit"
            name="button"
            type="submit"
            mt="6"
            colorScheme={"pink"}
            isLoading={formState.isSubmitting}
          >
            Login
          </Button>
        </Flex>
      </Flex>
    </div>
  );
}
