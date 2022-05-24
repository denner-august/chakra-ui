import { Flex, Button, Stack } from "@chakra-ui/react";

import { Input } from "../components/form/input";

export default function Home() {
  function temporaria(e) {
    e.preventDefault();
  }
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
        >
          <Stack spacing={5}>
            <Input name="Email" label="Email" type="Email" />
            <Input
              name="Password"
              label="Password"
              type="Password"
              maxLength={15}
            />
          </Stack>

          <Button
            type="submit"
            mt="6"
            colorScheme={"pink"}
            onClick={(value) => temporaria(value)}
          >
            Login
          </Button>
        </Flex>
      </Flex>
    </div>
  );
}
