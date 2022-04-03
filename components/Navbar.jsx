import React, { useState, useEffect, useRef } from "react";
import useBooleanValue from "@hooks/useBooleanValue";

import {
     motion,
     AnimateSharedLayout,
     isValidMotionProp,
     useAnimation,
} from "framer-motion";

import bars from "@variants/bars";
import navbar from "@variants/navbar";

import { links } from "@helpers/links";
import {
     useColorMode,
     Button,
     useBoolean,
     useBreakpointValue,
     Stack,
     Box,
} from "@chakra-ui/react";
import { lightBlue } from "@material-ui/core/colors";
import colors from "tailwindcss/colors";

const MotionBox = motion(Box);
const MotionStack = motion(Stack);

export default function Navbar() {
     const { colorMode, toggleColorMode } = useColorMode();
     const [selected, setSelected] = useState(null);
     const [color, setColor] = useBooleanValue("#506D96", "#10b981");
     const variant = useBreakpointValue([false, false, true]);
     const [animate, setAnimate] = useBooleanValue("closed", "open");
     let backgroundC;

     function handleClick() {
          setAnimate.toggle();
     }

     if (!variant) {
          backgroundC = "transparent";
     } else {
          backgroundC = "#506D96";
     }

     function handleOff() {
          setColor.toggle();
          setSelected(null);
     }

     const navbarItems = {
          open: {
               x: { staggerChildren: 0.07, delayChildren: 0.2 },
          },
          closed: {
               transition: { staggerChildren: 0.05, staggerDirection: -1 },
          },
     };

     return (
          <>
               <motion.nav
                    id="navbar"
                    className="nav-header w-full h-20 bg-[#1B2533] justify-between items-start border-b-4 transition duration-1000 px-12 flex border-current fixed z-50"
                    onMouseLeave={setColor.toggle}
                    variants={navbar}
                    animate={animate}
                    onMouseEnter={setColor.toggle}
                    style={{
                         alignItems: setAnimate.is(true)
                              ? "flex-start"
                              : "center",
                         paddingTop: setAnimate.is(true) ? "1rem" : "0",
                         flexDirection: setAnimate.is(true) ? "column" : "row",
                         color: color,
                    }}
               >
                    <MotionBox
                         display="flex"
                         flex={setAnimate.is(true) ? "none" : "auto"}
                         justifyContent="between"
                         alignItems="center"
                         w="full"
                    >
                         <motion.h1
                              className="font-bold text-3xl tracking-widest flex-auto"
                              // transition={{ duration: 1 }}
                              initial={{ x: "-100vw" }}
                              animate={{ x: 0 }}
                         >
                              CODEX
                         </motion.h1>
                         {!variant && (
                              <MotionStack
                                   as={Button}
                                   p={0}
                                   variant="ghost"
                                   zIndex={3}
                                   onClick={handleClick}
                                   position="relative"
                                   h="50px"
                                   color="inherit"
                                   minW="50px"
                                   align="center"
                                   justify="center"
                                   initial={{ x: "100vw" }}
                                   animate={{ x: 0 }}
                              >
                                   {bars.map(({ variants }, i) => (
                                        <MotionBox
                                             key={i}
                                             variants={variants}
                                             initial="closed"
                                             w="full"
                                             h="6px"
                                             bg="currentColor"
                                             animate={animate}
                                             align="center"
                                             justify="center"
                                             rounded="lg"
                                        ></MotionBox>
                                   ))}
                              </MotionStack>
                         )}
                    </MotionBox>
                    {(variant || setAnimate.is(true)) && (
                         <div className="flex-auto justify-between p-2 w-full h-full items-center flex ">
                              <AnimateSharedLayout>
                                   <motion.ul
                                        className="flex-auto text-custom p-4 font-bold cursor-pointer flex justify-end md:gap-2 "
                                        style={{
                                             flexDirection: setAnimate.is(true)
                                                  ? "column"
                                                  : "row",
                                        }}
                                   >
                                        {links.map(({ title, href }, i) => (
                                             <motion.li
                                                  key={i}
                                                  transition={{ duration: 1 }}
                                                  initial={{ x: "100vw" }}
                                                  animate={{ x: 0 }}
                                                  className="transition-colors w-full p-2 md:w-auto rounded-lg duration-1000 relative flex justify-center items-center outline-none"
                                                  style={{
                                                       color: color,
                                                  }}
                                                  onMouseEnter={() =>
                                                       setSelected(i)
                                                  }
                                             >
                                                  {selected === i && (
                                                       <motion.div
                                                            layoutId="selector"
                                                            className="absolute w-full h-3/4 bg-white rounded"
                                                            style={{
                                                                 backgroundColor:
                                                                      backgroundC,
                                                                 opacity: 0.2,
                                                            }}
                                                       ></motion.div>
                                                  )}
                                                  <a
                                                       href={href}
                                                       className="border md:border-none md:text-xl w-full text-center z-10 text-3xl font-bold p-10 md:p-0 border-[#506d96]"
                                                       onClick={setAnimate.off}
                                                  >
                                                       {title}
                                                  </a>
                                             </motion.li>
                                        ))}
                                   </motion.ul>
                              </AnimateSharedLayout>
                         </div>
                    )}
               </motion.nav>
          </>
     );
}
