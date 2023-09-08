import { motion } from "framer-motion";

const HoverScaleMedium = ({ children }) => {
  return (
    <motion.div className="cursor-pointer" whileHover={{ scale: 1.3 }}>
      {children}
    </motion.div>
  );
};

export default HoverScaleMedium;
