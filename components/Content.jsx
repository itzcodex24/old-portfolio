import React from "react";
import { motion } from "framer-motion";

import TechStack from "@components/TechStack/TechStack";

export default function Content() {
     return (
          <section className="w-full min-h-[100vh] h-min-content flex justify-center  text-white">
               <div className="max-w-[1920px] flex justify-center">
                    <motion.div className="flex flex-col md:w-[70%] text-center p-10 w-[400px] gap-5">
                         <motion.h1
                              className="md:text-5xl text-3xl font-bold p-10 text-[#1bfaad] font-aboutme tracking-widest uppercase"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 1 }}
                         >
                              About Codex
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
                                   Hey There! I&#39;m Codex! I am a 16 year old
                                   Front End Web Developer learning and creating
                                   ReactJS Apps. Over the past 2 years of my
                                   learning, I have worked to become a better
                                   developer then I have been ever before. Check
                                   out the rest of my portfolio, have a look
                                   around, and I look forward to hearing from
                                   you soon in the Contact Me section!
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
                                   Lorem ipsum dolor sit amet consectetur,
                                   adipisicing elit. Inventore, autem dolorem
                                   architecto libero recusandae a aliquam
                                   debitis quod doloribus! Nihil reprehenderit
                                   rem eaque expedita similique incidunt enim
                                   magni sit doloremque! Corrupti accusantium
                                   tempore, rerum amet ab optio sunt. Numquam,
                                   porro? Repellat aut quidem adipisci fuga odit
                                   facere soluta molestiae, perferendis ut minus
                                   earum maiores consequatur, error minima sequi
                                   optio possimus? Ratione obcaecati odio,
                                   facere eligendi repellendus cum porro veniam
                                   vitae! Sequi ipsa harum aspernatur culpa
                                   magni illum molestiae dolor suscipit debitis,
                                   assumenda iure eligendi ducimus repellendus
                                   distinctio. Doloribus, porro eveniet!
                              </motion.p>
                         </motion.div>

                         <motion.h1
                              className="md:text-5xl text-3xl font-bold p-10 text-[#1bfaad] font-aboutme tracking-widest uppercase"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 1 }}
                         >
                              My TechStack
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
