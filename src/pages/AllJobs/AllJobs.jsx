import { motion } from "framer-motion";
const AllJobs = () => {
  return (
    <motion.div
      initial={{ x: "-50vw" }}
      animate={{ x: 0 }}
      transition={{ delay: 0.1, duration:0.4 }}
      className="text-center"
    >
      This is All Jobs page
    </motion.div>
  );
};

export default AllJobs;
