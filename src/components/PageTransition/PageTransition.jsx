import { motion } from "framer-motion";
import PropTypes from "prop-types";
const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
PageTransition.propTypes = {
  children: PropTypes.node,
};
export default PageTransition;
