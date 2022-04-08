import React, { ReactNode } from "react";
// import Link from "next/link";
import Head from "next/head";
import {
   Box,
   Code,
   Container,
   Flex,
   Heading,
   Icon,
   Link,
   Spacer,
   Text,
} from "@chakra-ui/react";
import { ColorSwitcher } from "./ColorSwitcher";
import { FaGithub, FaYoutube } from "react-icons/fa";

type Props = {
   children?: ReactNode;
   title?: string;
   subTitle?: string;
};

const Layout = ({
   children,
   title = "This is the default title",
   subTitle,
}: Props) => (
   <div>
      <Head>
         <title>{title}</title>
         <meta charSet="utf-8" />
         <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container px={30} maxW={{ xl: "1200px" }} h="100vh">
         <Flex pt={10} pb={24}>
            <Box>
               <Heading>{title}</Heading>
               <Text
                  bgGradient="linear(to-l, #7928CA,#FF0080)"
                  bgClip="text"
                  fontWeight="extrabold"
               >
                  {subTitle}
               </Text>
            </Box>

            <Spacer />
            <ColorSwitcher />
         </Flex>

         {children}
      </Container>
   </div>
);

export default Layout;