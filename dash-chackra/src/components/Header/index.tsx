import { Flex, useBreakpointValue } from "@chakra-ui/react";

import { Logo } from "../Header/Logo";
import { NotificationsNav } from "../Header/NotificationsNav";
import { Profile } from "../Header/Profile";
import { SearchBox } from "../Header/SearchBox";
export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

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
      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex align={"center"} ml="auto">
        <NotificationsNav />

        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
