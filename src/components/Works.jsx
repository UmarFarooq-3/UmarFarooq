import React, { memo, lazy, Suspense, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Tilt = lazy(() => import("react-parallax-tilt"));

const ProjectCard = memo(
  ({ index, name, description, tags, image, source_code_link }) => {
    const [isDesktop, setIsDesktop] = useState(true);

    useEffect(() => {
      setIsDesktop(window.innerWidth > 640);
      const handleResize = () => setIsDesktop(window.innerWidth > 640);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
      <motion.div
        variants={fadeIn("up", "spring", index * 0.3, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        whileHover={isDesktop ? { scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" } : {}}
        whileTap={isDesktop ? { scale: 0.98 } : {}}
        transition={{ duration: 0.2 }}
        className="sm:w-[360px] w-full"
      >
        <Suspense fallback={<div className="text-white text-center p-5 bg-tertiary rounded-2xl">Loading Project...</div>}>
          <Tilt
            tiltMaxAngleX={30}
            tiltMaxAngleY={30}
            scale={1}
            transitionSpeed={600}
            tiltEnable={isDesktop}
            className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full shadow-lg hover:shadow-xl transition-shadow duration-200"
          >
            <div className="relative w-full h-[230px]">
              <img
                src={image}
                alt={`${name} project`}
                className="w-full h-full object-cover rounded-2xl"
                loading="lazy"
                width={360}
                height={230}
              />
              <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                <div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-200"
                >
                  <img
                    src={github}
                    alt="source code"
                    className="w-1/2 h-1/2 object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="mt-5">
              <h3 className="text-white font-bold text-[24px]">{name}</h3>
              <p className="mt-2 text-secondary text-[14px]">{description}</p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
          </Tilt>
        </Suspense>
      </motion.div>
    );
  },
  (prevProps, nextProps) =>
    prevProps.name === nextProps.name &&
    prevProps.description === nextProps.description &&
    prevProps.image === nextProps.image &&
    prevProps.source_code_link === nextProps.source_code_link &&
    prevProps.tags === nextProps.tags
);

const achievements = [
  {
    title: "Spring Framework Certification",
    issuer: "Simplilearn",
    date: "June 2024",
  },
  {
    title: "Spring Boot Framework Certification",
    issuer: "Simplilearn",
    date: "August 2024",
  },
  {
    title: "Front-End Web Design Certification",
    issuer: "Coursera",
    date: "May 2024",
  },
  {
    title: "Event Manager, CodeQuest Programming",
    issuer: "University of Mianwali",
    date: "2024",
  },
  {
    title: "Hackathon Participant (Code'x24)",
    issuer: "NUML University, Mianwali",
    date: "2024",
  },
  {
    title: "Prime Minister's Youth Laptop Scheme Recipient",
    issuer: "Government of Pakistan",
    date: "2023",
  },
];

const publications = [
  {
    title: "Skills based task assignment Dataset",
    journal:
      "Collaborated on a Kaggle dataset titled, focusing on mapping project task descriptions with relevant skills. This dataset aims to support research and applications in intelligent task assignment and resource planning. I contributed to data collection, organization, and structuring to ensure it’s usable for machine learning models and project planning tools.",
    date: "Nov 05, 2024",
    link: "https://www.kaggle.com/datasets/umerfarooq09/skill-based-task-assignment/data",
  },
];

const Works = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    setIsDesktop(window.innerWidth > 640);
    const handleResize = () => setIsDesktop(window.innerWidth > 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full scroll-smooth">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-12"
      >
        <p className={`${styles.sectionSubText} text-secondary`}>My work</p>
        <h2 className={`${styles.sectionHeadText} text-white`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("up", "spring", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-24"
        >
          Following projects showcase my skills and experience through real-world
          examples of my work. Each project is briefly described with links to
          code repositories and live demos. It reflects my ability to solve
          complex problems, work with different technologies, and manage projects
          effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-24"
      >
        <p className={`${styles.sectionSubText} text-secondary`}>Highlights</p>
        <h4 className={`${styles.sectionHeadText} text-white`}>Key Achievements.</h4>
      </motion.div>
      <motion.div
        variants={fadeIn("up", "spring", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-7 visible"
      >
        {achievements.length > 0 ? (
          achievements.map((achievement, index) => (
            <motion.div
              key={`achievement-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={isDesktop ? { scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" } : {}}
              whileTap={isDesktop ? { scale: 0.98 } : {}}
              transition={{ duration: 0.2, delay: index * 0.1 }}
            >
              <Suspense fallback={<div className="text-white text-center p-5 bg-tertiary rounded-2xl">Loading...</div>}>
                <Tilt
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  scale={1.02}
                  transitionSpeed={450}
                  tiltEnable={isDesktop}
                  className="bg-tertiary p-5 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-default"
                >
                  <div>
                    <h4 className="text-white text-[20px] font-bold mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-secondary text-[14px]">
                      {achievement.issuer} — <span className="italic">{achievement.date}</span>
                    </p>
                  </div>
                </Tilt>
              </Suspense>
            </motion.div>
          ))
        ) : (
          <p className="text-secondary text-[16px] text-center">No achievements available.</p>
        )}
      </motion.div>

      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-24"
      >
        <p className={`${styles.sectionSubText} text-secondary`}>Research</p>
        <h4 className={`${styles.sectionHeadText} text-white`}>Publications.</h4>
      </motion.div>
      <motion.div
        variants={fadeIn("up", "spring", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-10 grid grid-cols-1 gap-7 visible"
      >
        {publications.length > 0 ? (
          publications.map((publication, index) => (
            <motion.div
              key={`publication-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={isDesktop ? { scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" } : {}}
              whileTap={isDesktop ? { scale: 0.98 } : {}}
              transition={{ duration: 0.2, delay: index * 0.1 }}
            >
              <Suspense fallback={<div className="text-white text-center p-5 bg-tertiary rounded-2xl">Loading...</div>}>
                <Tilt
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  scale={1.02}
                  transitionSpeed={450}
                  tiltEnable={isDesktop}
                  className="bg-tertiary p-5 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-default"
                >
                  <div>
                    <h4 className="text-white text-[20px] font-bold mb-2">
                      {publication.title}
                    </h4>
                    <p className="text-secondary text-[14px] mb-2">
                      {publication.journal} — <span className="italic">{publication.date}</span>
                    </p>
                    {publication.link && (
                      <a
                        href={publication.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline text-[14px]"
                      >
                        View Publication
                      </a>
                    )}
                  </div>
                </Tilt>
              </Suspense>
            </motion.div>
          ))
        ) : (
          <p className="text-secondary text-[16px] text-center">No publications available.</p>
        )}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Works, "works");