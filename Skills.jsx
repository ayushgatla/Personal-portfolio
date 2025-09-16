import { motion } from "framer-motion";

export default function Skills() {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-purple-700 text-white text-xl font-bold text-center p-4 rounded-xl shadow-lg w-60 mx-auto"
    >
      SKILLS
    </motion.div>
  );
}
