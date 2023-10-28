import {
  AspectRatio,
  Button,
  Divider,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
//   useColorMode,
} from "@chakra-ui/react";
import React from "react";


const Cart = () => {
//   const { toggleColorMode } = useColorMode();
  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
      color="gray.50"
      fontFamily="Inter"
      bg="gray.700"
    >
      <VStack spacing={3} alignItems="flex-start">
        <Heading>Your cart</Heading>
        <Text color="gray.400">If price is too hard on your eyes, try changing the theme.</Text>
        {/* <Button colorScheme="black" onClick={toggleColorMode}> */}
          {/* Toggle */}
        {/* </Button> */}
        <HStack>
          <AspectRatio ratio={1} w={24}>
            <Image
              alt="produtc-img"
              src="https://859028l.ha.azioncdn.net/img/2022/11/produto/2942/grafite-minds-1.jpg?ims=461x571"
            />
          </AspectRatio>
          <Stack
            spacing={0}
            m={6}
            w="full"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <VStack w="full" alignItems="flex-start" spacing={0}>
              <Heading size="md">Awesome Black T-shirt</Heading>
              <Text color="gray.400">PNYCOMP27541</Text>
            </VStack>
          </Stack>
          <Heading size="sm">$119.00</Heading>
        </HStack>
        <HStack justify="space-between" w="100%">
          <Text color="gray.400">Subtotal</Text>
          <Heading size="sm">$119.00</Heading>
        </HStack>
        <HStack justify="space-between" w="100%">
          <Text color="gray.400">Shipping</Text>
          <Heading size="sm">$19.99</Heading>
        </HStack>
        <HStack justify="space-between" w="100%">
          <Text color="gray.400">Taxes (estimated)</Text>
          <Heading size="sm">$23.80</Heading>
        </HStack>
        <Divider backgroundColor="gray.300" />
        <HStack justify="space-between" w="100%">
          <Text color="gray.400">Total</Text>
          <Heading size="lg">$23.80</Heading>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Cart;
