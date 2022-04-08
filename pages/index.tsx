import * as React from "react";
import { useEffect } from "react";
import {
  Box,
  Text,
  Link,
  VStack,
  Grid,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Logo } from "assets/Logo";
import { ColorSwitcher } from "layouts/ColorSwitcher";
import { FcBullish, FcAddDatabase } from "react-icons/fc";
import { useRouter } from "next/router";

const App = () => {
  useEffect(() => {
    AutoRedirect()
  }, [])
  const router = useRouter()
  const AutoRedirect = () => {
    setTimeout(() => {
      router.push("/markets/coins")
    }, 2000)
  }
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="50vh" p={3}>
        <ColorSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Logo h="15vmin" pointerEvents="none" />
          <Text fontSize="6xl" fontWeight="900">
            Loading ...
          </Text>
          <Text fontSize="xl" fontWeight="600">
            You will redirected automatically ...
          </Text>
          <SimpleGrid
            columns={2}
            spacing="8"
            p="10"
            textAlign="center"
            rounded="lg"
          >
            {/* <NextLink href="markets/coins" passHref>
            <Box
              boxShadow="xs"
              p="6"
              rounded="md"
              bg="white"
              textAlign="center"
              borderColor="grey.10"
              borderWidth={1}
              _hover={{
                bg: "gray.50",
                borderWidth: "1px",
                borderColor: "red.200",
              }}
            >
              <Icon as={FcBullish} w={20} h={20} />
              <Link color="teal.500" fontSize="xl" display="block">
                Crypto Market
              </Link>
            </Box>
          </NextLink> */}

            {/* <NextLink href="sales" passHref>
            <Box
              boxShadow="xs"
              p="6"
              rounded="md"
              bg="white"
              textAlign="center"
              borderColor="grey.10"
              borderWidth={1}
              _hover={{
                bg: "gray.50",
                borderWidth: "1px",
                borderColor: "red.200",
              }}
            >
              <Icon as={FcAddDatabase} w={20} h={20} />
              <Link color="teal.500" fontSize="xl" display="block">
                Coins Market
              </Link>
            </Box>
          </NextLink> */}
          </SimpleGrid>
        </VStack>
      </Grid>
    </Box>
  )
};

export default App;