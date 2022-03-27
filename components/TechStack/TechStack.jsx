import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import Bar from "./Bar";

import CSS from "@static/TechStack/css.svg";
import ReactJS from "@static/TechStack/reactjs.svg";
import NodeJS from "@static/TechStack/nodejs.svg";
import TypeScript from "@static/TechStack/typescript.svg";
import JavaScript from "@static/TechStack/javascript.svg";
import HTML from "@static/TechStack/html.svg";

const TStack = [
     {
          label: "TypeScript",
          value: 20,
          Icon: TypeScript,
          backgroundColor: "#10b981",
     },
     {
          label: "JavaScript",
          value: 60,
          Icon: JavaScript,
          backgroundColor: "#10b981",
     },
     { label: "HTML", value: 80, Icon: HTML, backgroundColor: "#10b981" },
     { label: "CSS", value: 70, Icon: CSS, backgroundColor: "#10b981" },
     { label: "ReactJS", value: 70, Icon: ReactJS, backgroundColor: "#10b981" },
     { label: "NodeJS", value: 20, Icon: NodeJS, backgroundColor: "#10b981" },
];

export default function TechStack() {
     const controls = useAnimation();
     const { ref, inView } = useInView();
     useEffect(() => {
          if (inView) {
               controls.start("visible");
          }
          if (!inView) {
               controls.start("hidden");
          }
     }, [controls, inView]);
     const showVariant = {
          hidden: {
               transition: {
                    delayChildren: 0.05,
                    staggerChildren: 0.05,
                    staggerDirection: -1,
               },
          },
          visible: {
               transition: {
                    delayChildren: 0.05,
                    staggerChildren: 0.05,
                    staggerDirection: 1,
               },
          },
     };
     return (
          <motion.div
               initial="hidden"
               animate={controls}
               variants={showVariant}
               ref={ref}
               className="flex items-end h-full gap-2 "
          >
               {TStack.map((item) => {
                    return (
                         <React.Fragment key={item.label}>
                              <motion.div key={item.label} className="h-full flex flex-col justify-end py-5 ">
                                   <Bar {...item} />
                                   <h1 className="font-bold text-custom">
                                        {item.label}
                                   </h1>
                                   <h3 className="text-[0.7rem] text-custom">
                                        {item.value + "%"}
                                   </h3>
                              </motion.div>
                         </React.Fragment>
                    );
               })}
          </motion.div>
     );
}
