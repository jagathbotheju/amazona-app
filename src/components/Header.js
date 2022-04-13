import { HStack, Flex, Heading, Link } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <HStack
        bg="#203040"
        width="full"
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading ml="5" size="2xl" color="white">
          amazonia
        </Heading>
        <Flex gap="2" alignItems="center">
          <Link
            _hover={{ textDecoration: "none", color: "pink" }}
            fontWeight="bold"
            color="white"
          >
            Cart
          </Link>
          <Link
            _hover={{ textDecoration: "none", color: "pink" }}
            mr="5"
            fontWeight="bold"
            color="white"
          >
            SignIn
          </Link>
        </Flex>
      </HStack>
    </>
  );
};

export default Header;
