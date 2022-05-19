import { Flex, Input, Text, Icon } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";
export function Header() {
  return (
    <Flex
      as="header"
      width={"100%"}
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      align={"center"}
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        DashGo
        <Text as="span" ml="1" color={"pink.500"}>
          .
        </Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          px="4"
          mr="4"
          variant="unstyled"
          placeholder="Search in platform"
          _placeholder={{ color: "gray.400" }}
        ></Input>

        <Icon as={RiSearchLine} fontSize={20} />
      </Flex>
    </Flex>
  );
}
