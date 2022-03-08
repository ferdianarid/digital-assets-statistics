import React from "react";
import { Box, Flex, Table, Tbody, Td, Th, Thead, Tr, Text, FormControl, FormLabel, Input, FormErrorMessage, Button, Textarea, Badge, } from "@chakra-ui/react";
import Layout from "layouts/index";
import NextLink from "next/link"

export default function CoinsSales() {
   return (
      <Layout title="💌 Coin Market Sales" subTitle="Purchase Coins for Investing Cryptocurrency">
         <NextLink href="markets/coins" passHref>
            Coins Market
         </NextLink>
         <Flex>
            <Box>
               <Box
                  w="md"
                  p={5}
                  mr={4}
                  border="1px"
                  borderColor="gray.200"
                  boxShadow="md"
               >
                  <Text
                     fontSize="xl"
                     fontWeight="bold"
                     mb={4}
                     pb={2}
                     borderBottom="1px"
                     borderColor="gray.200"
                  >
                     ✍️ Purchase a Coins
                  </Text>
                  <form>
                     <FormControl pb={4}>
                        <FormLabel
                           htmlFor="phoneNumber"
                           fontWeight="bold"
                           fontSize="xs"
                           letterSpacing="1px"
                           textTransform="uppercase"
                        >
                           Wallets ID
                        </FormLabel>
                        <Input name="phoneNumber" placeholder="Phone Number" />
                        <FormErrorMessage></FormErrorMessage>
                     </FormControl>

                     <FormControl>
                        <FormLabel
                           htmlFor="name"
                           fontWeight="bold"
                           fontSize="xs"
                           letterSpacing="1px"
                           textTransform="uppercase"
                        >
                           Message
                        </FormLabel>
                        <Textarea placeholder="Bullshit Message" />
                        <FormErrorMessage></FormErrorMessage>
                     </FormControl>

                     <Button mt={4} colorScheme="teal" type="submit">
                        Purchase Now
                     </Button>
                  </form>
               </Box>
            </Box>
            <Box flex="1">
               <Table variant="striped">
                  <Thead>
                     <Tr>
                        <Th>Date</Th>
                        <Th>Wallets ID</Th>
                        <Th>Message</Th>
                        <Th>Status</Th>
                     </Tr>
                  </Thead>
                  <Tbody>
                     <Tr>
                        <Td>1/1/2021</Td>
                        <Td>085267852222</Td>
                        <Td>
                           Transaksi dari Ferdian ke Fadhila
                        </Td>
                        <Td>
                           <Badge colorScheme="yellow">Waiting</Badge>
                        </Td>
                     </Tr>
                     <Tr>
                        <Td>1/1/2021</Td>
                        <Td>085267852333</Td>
                        <Td>
                           Pembelian Ethereum Coins
                        </Td>
                        <Td>
                           <Badge colorScheme="green">Success</Badge>
                        </Td>
                     </Tr>
                     <Tr>
                        <Td>1/1/2021</Td>
                        <Td>085267852444</Td>
                        <Td>
                           Transfer Coins Litecoin ke Ferdian
                        </Td>
                        <Td>
                           <Badge colorScheme="red">Failed</Badge>
                        </Td>
                     </Tr>
                     <Tr>
                        <Td>1/1/2021</Td>
                        <Td>085267852444</Td>
                        <Td>
                           Swap coin dari Bitcoin ke Ethereum
                        </Td>
                        <Td>
                           <Badge colorScheme="red">failed</Badge>
                        </Td>
                     </Tr>
                     <Tr>
                        <Td>1/1/2021</Td>
                        <Td>085267852444</Td>
                        <Td>
                           Pembelian Coin Ethereum dan Bitcoin
                        </Td>
                        <Td>
                           <Badge colorScheme="red">Failed</Badge>
                        </Td>
                     </Tr>
                  </Tbody>
               </Table>
            </Box>
         </Flex>
      </Layout>
   );
}