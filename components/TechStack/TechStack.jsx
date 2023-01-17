import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import Bar from "./Bar";

import CSS from "@static/TechStack/css.svg";
import ReactJS from "@static/TechStack/reactjs.svg";
import NodeJS from "@static/TechStack/nodejs.svg";
import TypeScript from "@static/TechStack/typescript.svg";
import JavaScript from "@static/TechStack/javascript.svg";
import LUA from "@static/TechStack/lua.svg";
import HTML from "@static/TechStack/html.svg";

const TStack = [
     {
          label: "TypeScript",
          value: 70,
          Icon: TypeScript,
          backgroundColor: "#10b981",
     },
     {
          label: "JavaScript",
          value: 90,
          Icon: JavaScript,
          backgroundColor: "#10b981",
     },
     { label: "HTML", value: 90, Icon: HTML, backgroundColor: "#10b981" },
     { label: "CSS", value: 80, Icon: CSS, backgroundColor: "#10b981" },
     { label: "ReactJS", value: 90, Icon: ReactJS, backgroundColor: "#10b981" },
     { label: "LUA", value: 70, Icon: LUA, backgroundColor: "#10b981" },
];

export default function TechStack() {
     const controls = useAnimation();
     const { ref, inView } = useInView();
     useEffect(() => {
          if (inView) {
               console.log("In view");
               controls.start("visible");
          }
          if (!inView) {
               console.log("Not In view");
               controls.start("hidden");
               //
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
          <>
               <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={showVariant}
                    className="flex items-end justify-center h-full md:gap-2 gap-1 py-10"
               >
                    {TStack.map((item) => (
                         <Bar key={item.label} {...item} />
                    ))}
               </motion.div>
               <div className="w-full h-[1px]" ref={ref}></div>
          </>
     );
}
