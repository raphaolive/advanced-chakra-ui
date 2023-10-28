import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Details = () => {
  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack spacing={3} alignItems="flex-start">
        <Heading>Your details</Heading>
        <Text>If you already have an account, click here to log in.</Text>
        <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input placeholder="Jhon..." />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input placeholder="Doe" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input placeholder="Av. Wall Street 21" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>City</FormLabel>
              <Input placeholder="San Francisco" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>Country</FormLabel>
              <Select>
                <option value="usa">United States</option>
                <option value="cn">Canada</option>
                <option value="mx">Mexico</option>
                <option value="br">Brazil</option>
                <option value="ar">Argentina</option>
                <option value="ch">Chile</option>
              </Select>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <Checkbox defaultChecked>Ship to the billing address.</Checkbox>
          </GridItem>
          <GridItem colSpan={2}>
            <Button colorScheme="cyan" w="full">
              Place Order
            </Button>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </VStack>
  );
};

export default Details;
