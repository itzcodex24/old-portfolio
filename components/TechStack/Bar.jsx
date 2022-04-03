import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function Bar({ label, value, Icon, backgroundColor }) {
     const heightVariant = {
          hidden: { height: 0 },
          visible: {
               height: value + "%",
          },
     };

     return (
          <div className="flex h-full flex-col justify-end items-center md:gap-1 drop-shadow-lg">
               <Icon className="w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] " />
               <motion.div
                    transition={{ duration: 0.5, type: "tween" }}
                    variants={heightVariant}
                    style={{
                         transformStyle: "preserve-3d",
                         transform: "perspective(200px)",
                         backgroundColor: backgroundColor,
                    }}
                    className="md:w-[100px] flex justify-end py-5 flex-col
                    items-center rounded w-[40px] border transition-all tablet:bg-red-200"
               ></motion.div>
               <h1 className="md:font-bold text-custom hidden md:block md:text-[1rem]">
                    {label}
               </h1>
               <h3 className="md:text-[0.7rem] text-[0.7em] text-custom">
                    {value + "%"}
               </h3>
          </div>
     );
}
