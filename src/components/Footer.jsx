import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";

const Footer = () => {
  return (
    <motion.footer
      variants={slideIn("up", "tween", 0.2, 1)}
      className="bg-black-100 py-8 px-6 mt-16 rounded-t-2xl shadow-inner"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white text-sm text-center">
          © {new Date().getFullYear()} Umar Farooq. All rights reserved.
        </p>
        <div className="flex gap-4 text-white text-sm">
          <a href="#contact" className="hover:text-primary">Contact</a>
          <a href="#about" className="hover:text-primary">About</a>
          <a href="#projects" className="hover:text-primary">Projects</a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
