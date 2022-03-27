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
          <div className="flex h-full flex-col justify-end items-center gap-5">
               <Icon className="w-[3rem] h-[3rem]" />
               <motion.div
                    transition={{ duration: 0.5, type: "tween" }}
                    variants={heightVariant}
                    style={{
                         transformStyle: "preserve-3d",
                         transform: "perspective(200px)",
                         backgroundColor: backgroundColor,
                    }}
                    className="w-[100px] flex justify-end py-5 flex-col
                    items-center rounded "
               ></motion.div>
          </div>
     );
}
