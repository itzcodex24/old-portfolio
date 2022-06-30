import React, { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import {
     Stack,
     Icon,
     ChakraProvider,
     Center,
     LinkOverlay,
} from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const icons = [
     { name: "twitter", url: "https://twitter.com/MasterAndrei2/" },
     {
          name: "github",
          url: "https://github.com/itzcodex24/",
     },
];

export default function Footer() {
     const [selected, setSelected] = useState(null);
     const isVisible = selected !== null;
     return (
          <div
               className="w-full bottom-0 h-20 z-50 absolute"
               onMouseLeave={() => setSelected(null)}
          >
               <ChakraProvider>
                    <AnimatePresence>
                         <Center
                              className="w-full h-20 flex justify-center items-center p-4
                bg-[#1B2533] border-t-4 transition-colors duration-1000 z-50"
                              // style={{ border: "#506D96" }}
                              borderColor="#506D96"
                              // transition="1s ease border-color"
                              role="group"
                              _hover={{ borderColor: "#10b981" }}
                         >
                              <AnimateSharedLayout>
                                   <Stack direction="row" spacing={5}>
                                        {icons.map(({ name, url }, i) => {
                                             return (
                                                  <Center
                                                       position="relative"
                                                       key={i}
                                                       borderRadius="50%"
                                                       onMouseEnter={() =>
                                                            setSelected(i)
                                                       }
                                                       p="2"
                                                       h="3rem"
                                                       w="3rem"
                                                       shadow="lg"
                                                       // _hover={{ shadow: "dark-lg" }}
                                                       _groupHover={{
                                                            boxShadow:
                                                                 "0 0 .2rem #1B2533",
                                                       }}
                                                       transition=".3s ease box-shadow"
                                                  >
                                                       {selected === i &&
                                                            isVisible && (
                                                                 <motion.div
                                                                      animate={{
                                                                           opacity: 0.2,
                                                                      }}
                                                                      exit={{
                                                                           backgroundColor:
                                                                                "red",
                                                                      }}
                                                                      layoutId="lol"
                                                                      style={{
                                                                           backgroundColor:
                                                                                "#506D96",
                                                                           opacity: 0.2,
                                                                      }}
                                                                      className="absolute w-full h-full rounded-full"
                                                                 ></motion.div>
                                                            )}
                                                       <LinkOverlay href={url}>
                                                            <Icon
                                                                 as={
                                                                      FontAwesomeIcon
                                                                 }
                                                                 icon={[
                                                                      "fab",
                                                                      name,
                                                                 ]}
                                                                 color="#506D96"
                                                                 _groupHover={{
                                                                      color: "#10b981",
                                                                 }}
                                                                 transition="1s ease color"
                                                                 size="lg"
                                                                 zIndex="100"
                                                            />
                                                       </LinkOverlay>
                                                  </Center>
                                             );
                                        })}
                                   </Stack>
                              </AnimateSharedLayout>
                         </Center>
                    </AnimatePresence>
               </ChakraProvider>
          </div>
     );
}
