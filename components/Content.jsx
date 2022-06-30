import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import TechStack from "@components/TechStack/TechStack";

export default function Content() {
     const techstack = useAnimation();
     const { ref, inView } = useInView();

     useEffect(() => {
          if (inView) {
               techstack.start("visible");
          }
          if (!inView) {
               techstack.start("hidden");
          }
     }, [techstack, inView]);

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
          <section className="w-full min-h-[100vh] h-min-content flex justify-center  text-white">
               <div className="max-w-[1920px] flex justify-center">
                    <motion.div
                         variants={sentence}
                         initial="hidden"
                         animate="visible"
                         className="flex flex-col md:w-[70%] text-center p-10 w-[400px] gap-5"
                    >
                         <motion.h1 className="md:text-5xl text-3xl font-bold py-10 text-[#1bfaad] font-aboutme tracking-widest uppercase">
                              {"ABOUT CODEX".split("").map((char, index) => {
                                   return (
                                        <motion.span
                                             className="text-4xl w-full md:text-2xl lg:text-5xl"
                                             key={char + "-" + index}
                                             variants={letter}
                                        >
                                             {char}
                                        </motion.span>
                                   );
                              })}
                         </motion.h1>
                         <motion.div
                              data-tilt
                              // data-tilt-reverse="true"
                              data-tilt-max="10"
                              data-tilt-scale="1.1"
                              className="font-text font-bold max-w-[1000px] bg-[#2E3F57] p-10 rounded-lg shadow-lg"
                              style={{
                                   transformStyle: "preserve-3d",
                                   transform: "perspective(200px)",
                              }}
                         >
                              <motion.p
                                   className="font-bold"
                                   style={{ transform: "translateZ(100px)" }}
                              >
                                   Hey There! I&#39;m Codex! I am a 17 year old
                                   Front End Web Developer learning and creating
                                   ReactJS Apps. Over the past 2 years of my
                                   learning, I have worked to become a better
                                   developer then I have been ever before. Check
                                   out the rest of my portfolio, have a look
                                   around.
                              </motion.p>
                         </motion.div>
                         <motion.div
                              data-tilt
                              // data-tilt-reverse="true"
                              data-tilt-max="10"
                              data-tilt-scale="1.1"
                              className="font-text font-bold max-w-[1000px] bg-[#2E3F57] p-10 rounded-lg shadow-lg"
                              style={{
                                   transformStyle: "preserve-3d",
                                   transform: "perspective(200px)",
                              }}
                         >
                              <motion.p
                                   className="font-bold"
                                   style={{ transform: "translateZ(100px)" }}
                              >
                                   Please note this site is still under
                                   construction. Currently the Contact section
                                   doesn't work. If you need to contact me,
                                   Please note this site is still under
                                   construction. Currently the Contact section
                                   doesn't work. If you need to contact me,
                                   please use my discord - codex.exe#0157
                              </motion.p>
                         </motion.div>

                         <motion.h1
                              className="md:text-5xl text-3xl font-bold py-10 text-[#1bfaad] font-aboutme tracking-widest uppercase"
                              variants={sentence}
                              initial="hidden"
                              animate={techstack}
                              ref={ref}
                         >
                              {"MY TECHSTACK".split("").map((char, index) => {
                                   return (
                                        <motion.span
                                             className="text-4xl w-full md:text-2xl lg:text-5xl"
                                             key={char + "-" + index}
                                             variants={letter}
                                        >
                                             {char}
                                        </motion.span>
                                   );
                              })}
                         </motion.h1>
                         <motion.div
                              data-tilt
                              data-tilt-max="10"
                              data-tilt-scale="1.1"
                              id="techstack"
                              className=" w-full bg-[#2E3F57] shadow-lg h-[50vh] rounded-lg"
                              style={{
                                   transformStyle: "preserve-3d",
                                   transform: "perspective(200px)",
                              }}
                         >
                              <TechStack />
                         </motion.div>
                    </motion.div>
               </div>
          </section>
     );
}
