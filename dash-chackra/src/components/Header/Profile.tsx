import { Flex, Box, Avatar, Text } from "@chakra-ui/react";
import Link from "next/link";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align={"center"}>
      {showProfileData && (
        <Box mr="4" textAlign={"center"}>
          <Text>Denner Augusto</Text>
          <Link
            color="#F6AD55"
            href="https://www.linkedin.com/in/denner-bernardes/"
            target={"_blank"}
          >
            denner.augusto90@gmail.com
          </Link>
        </Box>
      )}

      <Link href="https://github.com/denner-august" target={"_blank"}>
        <Avatar
          color="black"
          backgroundColor={"#F6AD55"}
          size="md"
          name="Denner Augusto"
          src="https://avatars.githubusercontent.com/u/41222616?v=4"
        />
      </Link>
    </Flex>
  );
}
