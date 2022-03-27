import React from "react";
import { motion } from "framer-motion";
// import federer from "@static/federer_tennis.png";
import Typewriter from "typewriter-effect";
import DownButton from "@icons/downButton.svg";

import Body from "@components/Body";

export default function Main({ children }) {
     const text = "C O D E X ";
     const sentence = {
          hidden: { opacity: 1 },
          visible: {
               opacity: 1,
               transition: { delay: 0.5, staggerChildren: 0.05 },
          },
     };
     const letter = {
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
     };
     return (
          <>
               <div className="min-h-[100vh] bg-background pt-20 h-min-content mb-20">
                    <div className="flex justify-center">
                         <motion.h1
                              variants={sentence}
                              initial="hidden"
                              animate="visible"
                              className="md:p-20 text-custom font-bold tracking-widest text-7xl text-center inline-block font-tennis2"
                         >
                              {/* <span className="text-exs"> &lt;</span> */}

                              {text.split("").map((char, index) => {
                                   return (
                                             <motion.span
                                                  className="text-5xl w-full md:text-7xl lg:text-8xl"
                                                  key={char + "-" + index}
                                                  variants={letter}
                                             >
                                                  {char}
                                             </motion.span>
                                   );
                              })}
                              {/* <span className="text-exs"> /&gt;</span> */}

                              <motion.h1
                                   initial={{ x: "-100vw" }}
                                   animate={{ x: "0%" }}
                                   transition={{ duration: 1 }}
                                   className="p-2 border-b-4 border-topBorder"
                              ></motion.h1>
                              <div
                                   className="text-base pt-4"
                                   style={{ fontFamily: "Courier New" }}
                              >
                                   <Typewriter
                                        options={{
                                             loop: true,
                                        }}
                                        onInit={(typewriter) => {
                                             typewriter

                                                  .typeString("Developing")
                                                  .pauseFor(1000)
                                                  .deleteAll()
                                                  .typeString("Designing")
                                                  .pauseFor(1000)
                                                  .deleteAll()
                                                  .typeString("Distributing")
                                                  .pauseFor(1000)
                                                  .deleteAll()
                                                  .start();
                                        }}
                                   />
                              </div>
                         </motion.h1>
                    </div>
                    {/* <Body /> */}
                    {children}
               </div>
          </>
     );
}
