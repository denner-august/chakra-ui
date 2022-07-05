import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import { Input } from "../../components/form/input";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "react-query";
import { api } from "../../../services/api";
import { queryCliente } from "../../../services/queryClient";
import { useRouter } from "next/router";

import Link from "next/link";
import * as yup from "yup";

type CreateUserFormDataProps = {
  name: string;
  email: string;
  password: string;
  Password_confirmation: string;
};

export default function CreateUser() {
  const router = useRouter();

  const createUser = useMutation(
    async (user: CreateUserFormDataProps) => {
      const response = await api.post("users", {
        user: {
          ...user,
          created_at: new Date(),
        },
      });

      return response.data.user;
    },
    {
      onSuccess: () => {
        queryCliente.invalidateQueries("users");
      },
    }
  );

  const CreateUserFormSchema = yup.object({
    name: yup.string().required("nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail invalido"),
    password: yup
      .string()
      .required("senha obrigatória")
      .min(6, "senha precisa de no minimo 6 caracteres"),
    Password_confirmation: yup
      .string()
      .oneOf([null, yup.ref("password")], "senhas precisam ser iguais"),
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(CreateUserFormSchema),
  });

  const { errors } = formState;

  const handCreateUser: SubmitHandler<CreateUserFormDataProps> = async (
    values
  ) => {
    await createUser.mutateAsync(values);

    router.push("/users");
  };

  return (
    <Box>
      <Header />
      <Flex width="100%" my={6} maxWidth={1480} mx="auto" px={6}>
        <SideBar />

        <Box
          as="form"
          flex={1}
          borderRadius={8}
          bg="gray.800"
          p={8}
          onSubmit={handleSubmit(handCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">
            Create User
          </Heading>
          <Divider my={6} borderColor="gray.700" />
          <VStack spacing={8}>
            <SimpleGrid minChildWidth={240} spacing={8} w="100%">
              <Input
                {...register("name")}
                name="name"
                label="Full Name"
                type="text"
                error={errors.name}
              />

              <Input
                {...register("email")}
                name="email"
                label="Email"
                error={errors.email}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth={240} spacing={8} w="100%">
              <Input
                {...register("password")}
                name="password"
                label="Password"
                type="password"
                error={errors.password}
              />

              <Input
                {...register("Password_confirmation")}
                name="Password_confirmation"
                type="password"
                label="Confirmation Password"
                error={errors.Password_confirmation}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt={8} justifyContent="flex-end">
            <HStack spacing={4}>
              <Link href="/users">
                <Button as="a" colorScheme="whiteAlpha">
                  Cancel
                </Button>
              </Link>
              <Button
                type="submit"
                colorScheme="pink"
                isLoading={formState.isSubmitting}
              >
                Confirm
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
