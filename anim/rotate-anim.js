"use client";
import { motion } from "framer-motion";

const roateVar = {
  init: ({ degree }) => ({
    transform: `rotate(${degree}deg) scale(0)`,
  }),
  enter: ({ dur }) => ({
    transform: "rotate(0deg) scale(1)",
    transition: {
      duration: dur,
    },
  }),
  exit: ({ degree, dur }) => ({
    transform: `rotate(${degree * -1}deg) scale(0)`,
    transition: {
      duration: dur,
    },
  }),
};

export default function RotateAnim({
  children,
  dur = 0.3,
  classes = "",
  degree = 180,
}) {
  return (
    <motion.div
      className={classes}
      variants={roateVar}
      initial="init"
      exit="exit"
      animate="enter"
      custom={{ degree, dur }}
    >
      {children}
    </motion.div>
  );
}
