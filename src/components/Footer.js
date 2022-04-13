import { Text, HStack } from "@chakra-ui/react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <HStack bg="#203040" width="full" justifyContent="center">
        <AiOutlineCopyrightCircle color="white" />
        <Text color="white">2020 All rights reserved</Text>
      </HStack>
    </>
  );
};

export default Footer;
