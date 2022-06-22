import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useSideBarDrawer } from "../../context/sideBarDraweContext";

import { SideBarNav } from "./SidebarNav";

export function SideBar() {
  const {
    disclosure: { isOpen, onClose },
  } = useSideBarDrawer();

  const isFloatSideBar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isFloatSideBar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800">
            <DrawerCloseButton mt={6} />
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              <SideBarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return (
    <Box as="aside" w="64" mr="8">
      <SideBarNav />
    </Box>
  );
}
