import { VStack, HStack, Box, Image, Flex, Text, Icon } from "@chakra-ui/react";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";

//https://github.com/basir/amazona

export default function App() {
  return (
    <>
      <VStack>
        <Header />
        <Card />
        <Footer />
      </VStack>
    </>
  );
}
