import { motion } from "framer-motion";

const AddAJob = () => {
  return (
    <motion.div
      initial={{ x: "-50vw" }}
      animate={{ x: 0 }}
      transition={{ delay: 0.1, duration:0.4 }}
      className="text-center"
    >
      This is Add A Job page
    </motion.div>
  );
};

export default AddAJob;
