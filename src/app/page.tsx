// https://www.figma.com/file/vOcnzw9yT05grSCD1ji7ax/egghead.io---Introduction-to-Chakra-UI?node-id=802%3A9203&mode=dev

import { Container, Flex } from "@chakra-ui/react";
import Cart from "./sections/cart";
import Details from "./sections/details";

export default function Home() {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex
        h={{ base: "auto", md: "100vh" }}
        py={[0, 10, 20]}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Details />
        <Cart />
      </Flex>
    </Container>
  );
}
