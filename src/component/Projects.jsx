import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const AUTO_SCROLL_DELAY = 3000;
const AUTO_SCROLL_RESUME_DELAY = 8000;

const projects = [
  {
    title: "Video Understanding System",
    description:
      "A full-stack AI tool that turns video input into clear, searchable understanding for faster review and analysis.",
    link: "https://github.com/laljith-gamer/visual_ai_editor",
  },
];

const Projects = () => {
  const [flippedCards, setFlippedCards] = useState([]);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [isAutoScrollActive, setIsAutoScrollActive] = useState(true);
  const scrollRef = useRef(null);
  const resumeTimeoutRef = useRef(null);
  const isPointerInsideScrollRef = useRef(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const activeCard =
      scrollContainer?.querySelectorAll(".project-card")[activeProjectIndex];

    if (!scrollContainer || !activeCard) {
      return;
    }

    scrollContainer.scrollTo({
      left:
        activeCard.offsetLeft -
        (scrollContainer.clientWidth - activeCard.clientWidth) / 2,
      behavior: "smooth",
    });
  }, [activeProjectIndex]);

  useEffect(() => {
    if (!isAutoScrollActive) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveProjectIndex((currentIndex) =>
        currentIndex === projects.length - 1 ? 0 : currentIndex + 1
      );
    }, AUTO_SCROLL_DELAY);

    return () => window.clearInterval(intervalId);
  }, [isAutoScrollActive]);

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) {
        window.clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  const clearResumeTimer = () => {
    if (resumeTimeoutRef.current) {
      window.clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }
  };

  const scheduleAutoScrollResume = () => {
    clearResumeTimer();
    resumeTimeoutRef.current = window.setTimeout(() => {
      setIsAutoScrollActive(true);
      resumeTimeoutRef.current = null;
    }, AUTO_SCROLL_RESUME_DELAY);
  };

  const pauseAutoScroll = ({ resumeLater = true } = {}) => {
    setIsAutoScrollActive(false);
    clearResumeTimer();

    if (resumeLater && !isPointerInsideScrollRef.current) {
      scheduleAutoScrollResume();
    }
  };

  const handleScrollPointerEnter = () => {
    isPointerInsideScrollRef.current = true;
    pauseAutoScroll({ resumeLater: false });
  };

  const handleScrollPointerLeave = () => {
    isPointerInsideScrollRef.current = false;
    scheduleAutoScrollResume();
  };

  const handleScrollFocus = () => {
    pauseAutoScroll({ resumeLater: false });
  };

  const handleScrollBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      scheduleAutoScrollResume();
    }
  };

  const toggleCard = (title, index) => {
    pauseAutoScroll();
    setActiveProjectIndex(index);
    setFlippedCards((currentCards) =>
      currentCards.includes(title)
        ? currentCards.filter((cardTitle) => cardTitle !== title)
        : [...currentCards, title]
    );
  };

  const handleKeyDown = (event, title, index) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleCard(title, index);
    }
  };

  return (
    <motion.section
      className="px-5 pb-28"
      initial={{ opacity: 0, y: 55, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl">
        <motion.h1
          className="mb-10 text-center text-4xl font-semibold"
          initial={{ opacity: 0, x: -70, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          Projects
        </motion.h1>

        <div
          className="projects-frame"
          onPointerEnter={handleScrollPointerEnter}
          onPointerLeave={handleScrollPointerLeave}
          onFocus={handleScrollFocus}
          onBlur={handleScrollBlur}
        >
          <div className="projects-scroll" ref={scrollRef}>
            {projects.map((project, index) => {
              const isFlipped = flippedCards.includes(project.title);
              const isActive = activeProjectIndex === index;

              return (
                <motion.div
                  key={project.title}
                  className={`project-card ${isActive ? "is-active" : ""}`}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isFlipped}
                  onClick={() => toggleCard(project.title, index)}
                  onKeyDown={(event) =>
                    handleKeyDown(event, project.title, index)
                  }
                  initial={{ opacity: 0, x: 90, filter: "blur(12px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: 0.75,
                    ease: "easeOut",
                    delay: index * 0.08,
                  }}
                >
                  <div
                    className={`project-card-inner ${
                      isFlipped ? "is-flipped" : ""
                    }`}
                  >
                    <div className="project-card-face project-card-front">
                      <span className="project-card-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2>{project.title}</h2>
                    </div>

                    <div className="project-card-face project-card-back">
                      <p>{project.description}</p>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(event) => {
                          event.stopPropagation();
                          pauseAutoScroll();
                        }}
                      >
                        View Project -&gt;
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
