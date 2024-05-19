import React, { useEffect } from "react";
import Image from "./Image";
import { motion } from "framer-motion";

const container = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.61, 1, 0.88, 1],
      duration: 1.5,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 1.8,
    },
  },
};

const itemMain = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.61, 1, 0.88, 1],
      duration: 1.8,
    },
  },
};

const Loader = ({ setLoading }) => {
  return (
    <motion.div
      className="loader"
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      onAnimationComplete={() => setLoading(false)}
    >
      <div className="loader-inner">
        <ImageBlock id="image-1" varients={item} />
        <div className="transition-image">
          <motion.div variants={itemMain} className="transition-image">
            <motion.img
              layoutId="main-image-1"
              src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
              alt="random alt"
              transition={{
                duration: 1.6,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
        <ImageBlock id="image-3" varients={item} />
        <ImageBlock id="image-4" varients={item} />
        <ImageBlock id="image-5" varients={item} />
      </div>
    </motion.div>
  );
};

export const ImageBlock = ({ id, varients }) => {
  return (
    <motion.div className={`image-block ${id}`} variants={varients}>
      <Image
        src={process.env.PUBLIC_URL + `/images/${id}.webp`}
        fallback={process.env.PUBLIC_URL + `/images/${id}.jpg`}
        alt={id}
      />
    </motion.div>
  );
};
export default Loader;
