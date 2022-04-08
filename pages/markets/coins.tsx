import React, { useState } from "react";
import { Badge, Flex, Table, Tbody, Td, Th, Thead, Tr, Image, Text, Spinner, Grid, Button } from "@chakra-ui/react";
import Layout from "layouts/index";
import NextLink from "next/link";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration"
import { NEXT_PUBLIC_API_URL } from "configapis";

interface IMarketCoins {
   id: string
   symbol: string
   name: string
   image: string
   current_price: number
   price_change_percentage_24h: number
   total_volume: number
   market_cap: number
}

interface IMarketPageProps {
   initialCoinMarket: IMarketCoins[]
}

const getCoinMarket = async (pages = 1) => {
   const API_URL = `${NEXT_PUBLIC_API_URL}&page=${pages}&sparkline=false`
   const response = await fetch(API_URL)

   if (!response) {
      throw new Error("Error Fetching Data")
   }

   return await response.json()
}

const CurrencyFormat = (currency: number) => {
   return Intl.NumberFormat("id-ID").format(currency)
}

const PercetageFormat = ({ percent }: { percent: number }) => {
   const formatPercent = Intl.NumberFormat("id-ID", {
      style: "percent",
      minimumFractionDigits: 1,
      maximumFractionDigits: 3
   }).format(percent / 100)

   let textColor = "black"
   if (percent > 0) {
      textColor = "green.600"
   } else if (percent < 0) {
      textColor = "red.600"
   }

   return <Text color={textColor}>{formatPercent}</Text>
}

// use Initial Data SSR if Component is not more Nesting
// use Hydrate SSR when Components more Nesting

/* Initial Data SSR | Not Nesting
export async function getStaticProps() {
   const initialCoinMarket = await getCoinMarket()

   return {
      props: {
         initialCoinMarket
      }
   }
}*/

// Hydrate State SSR | Nested Component
export async function getStaticProps() {
   const queryClients = new QueryClient()
   await queryClients.prefetchQuery(["coinmarket", 1], () => getCoinMarket())

   return {
      props: {
         dehydratedState: dehydrate(queryClients)
      }
   }
}

// { initialCoinMarket }: IMarketPageProps
export default function Market() {
   const [pages, setPages] = useState(1)

   const PreviousPage = () => {
      setPages(pages - 1)
   }

   const NextPage = () => {
      setPages(pages + 1)
   }

   const { data, isError, isLoading, isFetching, isSuccess } = useQuery(["coinmarket", pages], () => getCoinMarket(pages), {
      staleTime: 3000,
      refetchInterval: 3000,
      // initialData: initialCoinMarket
   })
   return (
      <Layout title="Digital Assets" subTitle="Digital Assets Realtime Statistics">
         {
            isFetching && (
               <Spinner color="blue.700" position="fixed" top={10} right={10} />
            )
         }
         <NextLink href="/sales" passHref>
            Coins Sales
         </NextLink>
         <Table variant="simple">
            <Thead>
               <Tr>
                  <Th>Coin</Th>
                  <Th>Last Price</Th>
                  <Th>24h % Change</Th>
                  <Th isNumeric>Total Volume</Th>
                  <Th isNumeric>Market Cap</Th>
               </Tr>
            </Thead>
            <Tbody>
               {isError && <Text>Error Request</Text>}
               {
                  isSuccess && data?.map((coinData: IMarketCoins) => (
                     <Tr key={coinData.id} id={coinData.id}>
                        <Td>
                           <Flex alignItems="center">
                              <Image
                                 src={coinData.image}
                                 alt="alt"
                                 boxSize="24px"
                                 ignoreFallback={true}
                              />

                              <Text pl={2} fontWeight="bold" textTransform="capitalize">
                                 {coinData.id}
                              </Text>
                              <Badge ml={3}>{coinData.symbol}</Badge>
                           </Flex>
                        </Td>
                        <Td>{CurrencyFormat(coinData.current_price)}</Td>
                        <Td><PercetageFormat percent={coinData.price_change_percentage_24h} /></Td>
                        <Td isNumeric>{CurrencyFormat(coinData.total_volume)}</Td>
                        <Td isNumeric>{CurrencyFormat(coinData.market_cap)}</Td>
                     </Tr>
                  ))
               }
            </Tbody>
         </Table>
         <Grid templateColumns="70% 1fr auto 1fr" my={10} gap={6}>
            <div></div>
            <Button colorScheme="facebook" variant="outline" size="sm" onClick={PreviousPage} disabled={pages == 1 ? true : false}>Previous</Button>
            <Text>{pages}</Text>
            <Button colorScheme="facebook" variant="outline" size="sm" onClick={NextPage}>Next</Button>
         </Grid>
      </Layout>
   );
}