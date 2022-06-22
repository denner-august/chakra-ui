import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface childrenProps {
  children: ReactNode;
}

interface SidebarDrawerContextProps {
  disclosure: UseDisclosureReturn;
}

export const SidebarDrawerContext = createContext(
  {} as SidebarDrawerContextProps
);

export function SidebarDrawerProvider({ children }: childrenProps) {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);

  return (
    <SidebarDrawerContext.Provider value={{ disclosure }}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

export const useSideBarDrawer = () => useContext(SidebarDrawerContext);
