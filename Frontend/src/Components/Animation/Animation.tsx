import { motion } from 'framer-motion';

interface TextMotionAnimation {
  children: React.ReactNode,
  ClassName?: string,
}

const TextMotionAnimation = ({ children, ClassName } : TextMotionAnimation) => {
  return(
    <motion.div
      initial={{ y:"100%", opacity: 0 }}
      animate={{ y:0, opacity: 1}}
      viewport={{ amount: 0.05 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      className={ClassName}
    >
      {children}
    </motion.div>
  );
};

export default TextMotionAnimation;