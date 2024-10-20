import { motion } from 'framer-motion';

interface SectionAnimationsProps {
  children: React.ReactNode,
  ClassName?: string,
}

const SectionAnimations = ({ children, ClassName } : SectionAnimationsProps) => {
  return(
    <motion.div
      variants={{
        "hidden": { y:"100%", opacity: 0 },
        "visible": { y:0, opacity: 1},
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 2,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      className={ClassName}
    >
      {children}
    </motion.div>
  );
};

export default SectionAnimations;