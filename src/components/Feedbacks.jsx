import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <>
      <div className={`mt-12 bg-black-100 rounded-[20px]`}>
        <div
          className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
        >
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>What others say</p>
            <h2 className={styles.sectionHeadText}>Testimonials.</h2>
          </motion.div>
        </div>
        <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center`}>
          {testimonials.map((testimonial, index) => (
            <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
          ))}
        </div>
      </div>
      <div className="mt-20 pb-10 flex justify-center gap-6">
        {[
         { platform: "LinkedIn", url: "https://www.linkedin.com/in/umar-farooq-malik", icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png" },
         { platform: "Instagram", url: "https://www.instagram.com/backendsolutions_/", icon: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png" },
         { platform: "GitHub", url: "https://github.com/UmarFarooq-3/", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968866.png" },
         { platform: "Call", url: "tel:+92 3016091821", icon: "https://cdn-icons-png.flaticon.com/512/724/724715.png" },
         { platform: "Email", url: "mailto:itxxumeer@gmail.com", icon: "https://cdn-icons-png.flaticon.com/512/732/732200.png" }

         ,
        ].map((social, index) => (
          <motion.a
            key={social.platform}
            href={social.url}
            target={social.platform === "Call" ? "_self" : "_blank"}
            rel={social.platform === "Call" ? undefined : "noopener noreferrer"}
            variants={fadeIn("up", "spring", index * 0.2, 0.5)}
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="relative group"
          >
            <img
              src={social.icon}
              alt={`${social.platform} icon`}
              className="w-12 h-12 rounded-full object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300"
            />
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {social.platform}
            </span>
          </motion.a>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Feedbacks, "");