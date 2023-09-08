import { motion } from "framer-motion";

const HoverScaleSmall = ({ children }) => {
  return (
    <motion.div className="cursor-pointer" whileHover={{ scale: 1.1 }}>
      {children}
    </motion.div>
  );
};

export default HoverScaleSmall;
