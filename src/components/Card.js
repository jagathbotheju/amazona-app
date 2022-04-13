import {
  VStack,
  Icon,
  Flex,
  Text,
  Image,
  HStack,
  SimpleGrid
} from "@chakra-ui/react";

import { BsStarFill, BsStarHalf } from "react-icons/bs";
import products from "../data";

const Card = () => {
  //const products = [p1, p2, p3, p4, p5, p6];
  console.log(products);

  return (
    <>
      <SimpleGrid columns={[1, 4, 6]} p="5" spacing="5">
        {products.map((product) => {
          return (
            <VStack
              key={product._id}
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
            >
              <Image
                boxSize="200px"
                objectFit="contain"
                src={product.image}
                alt="product-1"
              />
              <Flex
                pl="4"
                pb="5px"
                width="full"
                bg="gold"
                justifyContent="start"
                direction="column"
              >
                <Text fontWeight="bold">{product.name}</Text>
                <Flex gap="0.5">
                  <Icon color="red.600" as={BsStarFill} />
                  <Icon color="red.600" as={BsStarFill} />
                  <Icon color="red.600" as={BsStarFill} />
                  <Icon color="red.600" as={BsStarFill} />
                  <Icon color="red.600" as={BsStarFill} />
                  <Icon color="red.600" as={BsStarHalf} />
                </Flex>
                <Text fontWeight="bold">${product.price}</Text>
              </Flex>
            </VStack>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default Card;
