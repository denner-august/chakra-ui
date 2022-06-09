import { Button } from "@chakra-ui/react";

interface PaginationItemProos {
  isCurrent?: Boolean;
  number: number;
}

export function PaginationItem({
  isCurrent = false,
  number,
}: PaginationItemProos) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width={4}
        colorScheme="pink"
        disabled
        _disabled={{ cursor: "default", bg: "pink.500" }}
      >
        {number}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width={4}
      colorScheme="pink"
      bg="gray.700"
      _hover={{ bg: "gray.500" }}
    >
      {number}
    </Button>
  );
}
