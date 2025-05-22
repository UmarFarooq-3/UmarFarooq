import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import img from "../assets/img.png";
import StarsCanvas from "./canvas/Stars"; // Use your star canvas here

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='w-[220px] flex-shrink-0'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div className="relative flex flex-col lg:flex-row gap-10 items-center lg:items-start">
      {/* Stars background behind */}
      {/* <StarsCanvas /> */}

      {/* Left Side: Text + Cards */}
      <div className="flex-1 text-center lg:text-left">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto lg:mx-0"
        >
          Experienced web developer specializing in designing and delivering robust, high-performance applications across the full technology stack. Known for architecting scalable backend systems and dynamic user interfaces that meet evolving business needs. Adept at breaking down complex challenges into smart, efficient solutions, with a strong focus on performance, maintainability, and user experience. Passionate about leveraging emerging technologies and intelligent automation to create impactful, forward-thinking digital products.
        </motion.p>

        <div className="mt-20 flex flex-wrap justify-center gap-6 md:flex-nowrap">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>

      {/* Right Side: Image */}
      <motion.div
        className="hidden lg:flex justify-end flex-1 mt-20 ml-auto"
        initial={{ y: 0 }}
        animate={{ y: [0, -12, 0] }} // Moves up and down
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <img
          src={img}
          alt="Profile"
          className="w-full max-w-[500px] h-auto object-contain rounded-xl"
        />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, "about");
