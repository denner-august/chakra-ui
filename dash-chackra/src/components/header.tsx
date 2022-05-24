import {
  Flex,
  Input,
  Text,
  Icon,
  HStack,
  Box,
  Link,
  Avatar,
} from "@chakra-ui/react";
import {
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine,
} from "react-icons/ri";
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

      <Flex align={"center"} ml="auto">
        <HStack
          spacing={10}
          mx={8}
          pr={8}
          py={1}
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize={20} />
          <Icon as={RiUserAddLine} fontSize={20} />
        </HStack>

        <Flex align={"center"}>
          <Box mr="4" textAlign={"center"}>
            <Text>Denner Augusto</Text>
            <Link
              onClick={() => alert("you found my linkedin")}
              color="#F6AD55"
              href="https://www.linkedin.com/in/denner-bernardes/"
              target={"_blank"}
            >
              denner.augusto90@gmail.com
            </Link>
          </Box>

          <Link
            href="https://github.com/denner-august"
            target={"_blank"}
            onClick={() => alert("you found my github")}
          >
            <Avatar
              color="black"
              backgroundColor={"#F6AD55"}
              size="md"
              name="Denner Augusto"
              src="https://avatars.githubusercontent.com/u/41222616?v=4"
            />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
