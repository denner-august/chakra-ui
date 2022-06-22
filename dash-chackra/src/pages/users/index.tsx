import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Pagination } from "../../components/Pagination";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import Link from "next/link";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />
      <Flex width="100%" my={6} maxWidth={1480} mx="auto" px={6}>
        <SideBar />

        <Box flex={1} borderRadius={8} bg="gray.800" p={8}>
          <Flex mb={8} justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuarios
            </Heading>

            <Link href="users/create" passHref>
              <Button
                as="a"
                size="lg"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} />}
                cursor="pointer"
              >
                Criar novo usuario
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" width={8}>
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                <Th width={8}></Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight="bold">Denner Augusto</Text>
                    <Text fontSize="sm" color="gray.300">
                      denner.augsto90@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>27/Maio/2022</Td>}
                <Td>
                  {isWideVersion && (
                    <Button
                      as="a"
                      size="lg"
                      fontSize="sm"
                      colorScheme="blue"
                      leftIcon={<Icon as={RiPencilLine} />}
                      cursor="pointer"
                    >
                      Editar
                    </Button>
                  )}
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
