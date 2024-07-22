import { Box, Flex, Text } from "@chakra-ui/react";
import ProductCrousel from "./ProductCrousel";
import { Carousels } from "./Crousel";
import { SmallProductCrousel } from "./SmallProductCrousel";

function Product() {
  return (
    <div>
      <Text pl={6} align="start" fontSize="3xl" fontWeight="bold">
        Product
      </Text>
      <ProductCrousel />
      <Flex gap={18} pt={8}  pl={8}>
        <Box
          bg={"white"}
          pt={4}
         
          borderRadius={"lg"}
          pl={10}
          pr={10}
          pb={14}
        >
          
          <SmallProductCrousel />
        </Box>
        <Box
          bg={"white"}
          pt={4}
         
          borderRadius={"lg"}
          pl={10}
          pr={10}
          pb={10}
        >
          
          <SmallProductCrousel />
        </Box>
        <Box
          bg={"white"}
          pt={4}
         
          borderRadius={"lg"}
          pl={10}
          pr={10}
          pb={10}
        >
          
          <SmallProductCrousel />
        </Box>
      </Flex>
    </div>
  );
}

export default Product;
