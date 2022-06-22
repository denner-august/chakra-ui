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
import Link from "next/link";

export default function CreateUser() {
  return (
    <Box>
      <Header />
      <Flex width="100%" my={6} maxWidth={1480} mx="auto" px={6}>
        <SideBar />

        <Box flex={1} borderRadius={8} bg="gray.800" p={8}>
          <Heading size="lg" fontWeight="normal">
            Create User
          </Heading>
          <Divider my={6} borderColor="gray.700" />
          <VStack spacing={8}>
            <SimpleGrid minChildWidth={240} spacing={8} w="100%">
              <Input name="name" label="Full Name" />
              <Input name="email" label="Email" />
            </SimpleGrid>

            <SimpleGrid minChildWidth={240} spacing={8} w="100%">
              <Input name="Password" type="password" label="Passowrd" />
              <Input
                name="Password_confirmation"
                type="password"
                label="Confirmation Passowrd"
              />
            </SimpleGrid>
          </VStack>

          <Flex mt={8} justifyContent="flex-end">
            <HStack spacing={4}>
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancel
                </Button>
              </Link>
              <Button colorScheme="pink">Confirm</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
