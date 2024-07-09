"use client";
import { motion } from "framer-motion";

const animVar = {
  init: ({ xy, dis }) => {
    const initState = {
      opacity: 0,
    };

    // Mapping for xy directions
    const initialPosition = {
      ltr: { x: -1 * dis },
      btu: { y: dis },
      utb: { y: -1 * dis },
      rtl: { x: dis },
    };

    return {
      ...initState,
      ...initialPosition[xy],
    };
  },

  enter: ({ delay, xy }) => {
    const finalState = {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay,
      },
    };

    // Mapping for xy directions
    const finalPosition = {
      ltr: { x: 0 },
      btu: { y: 0 },
      utb: { y: 0 },
      rtl: { x: 0 },
    };

    return { ...finalState, ...finalPosition[xy] };
  },
  exit: ({ xy }) => {
    const initState = {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    };

    // Mapping for xy directions
    const initialPosition = {
      ltr: { x: -1 * dis },
      btu: { y: dis },
      utb: { y: -1 * dis },
      rtl: { x: dis },
    };

    return {
      ...initState,
      ...initialPosition[xy],
    };
  },
};

// ltr rtl utb btu

export default function XYAnim({
  children,
  xy = "btu",
  delay = 0,
  classes = "",
  dis = 80,
}) {
  return (
    <motion.div
      className={classes}
      variants={animVar}
      initial="init"
      exit="exit"
      whileInView="enter"
      viewport={{ once: true }}
      custom={{ delay, xy, dis }}
    >
      {children}
    </motion.div>
  );
}
