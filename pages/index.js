import * as React from "react";
import Head from "next/head";
import { ColorModeScript, ChakraProvider } from "@chakra-ui/react";
import theme from "../lib/theme";
import favicon from "@icons/codex.png";
import "vanilla-tilt";
//* Components

import Main from "@components/Main";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Content from "@components/Content";

export default function Home({}) {
     return (
          <main className="max-w-[100vw] min-h-[100vh] h-[min-content] overflow-x-hidden bg-gradient-to-b relative ">
               <Head>
                    <link rel="shortcut icon" href={favicon.src} />
                    <title>Codex Portfolio</title>
               </Head>
               <div className="fixed w-[fit-content] h-screen md:flex flex-col items-center bg-transparent justify-between z-[10] hidden">
                    <div className="flex-auto bg-[#1B2533] w-1" />
                    <p className="rotate-[-90deg] text-custom py-10 px-2 font-bold tracking-widest">
                         C O D E X
                    </p>
                    <div className="flex-auto bg-[#1B2533] w-1" />
               </div>

               <ColorModeScript
                    initialColorMode={theme.config.initialColorMode}
               />
               <ChakraProvider>
                    <Navbar />
               </ChakraProvider>
               <Main>
                    <Content />
               </Main>

               <Footer />
          </main>
     );
}
