export const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw",
      scale: 0.8,
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      x: "100vw",
      scale: 1.2,
    },
  };
  
  export const pageTransition = {
    // duration:3
  
    // transition: "linear"
  
    // type: "spring",
    // stiffness: 50
  
    type: "tween",
    ease: "anticipate",
    duration: 4,
  };