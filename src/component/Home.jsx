import { motion } from "motion/react";
import mine from "../assets/mine.jpg";
import mypic from "../assets/mypic.png";

const Home = () => {
  return (
    <>
      <div className="flex mt-40 flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 70, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "ease",delay: 0.3 }}
          className="relative text-transparent bg-clip-text bg-[linear-gradient(#aaaaaa,#000000)] bottom-0 text-center uppercase text-7xl"
        >
          laljith V
        </motion.h1>
        <motion.div className="relative">
          <motion.img
            src={mine}
            alt=""
            initial={{ opacity: 0, scale: 0.7, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="size-47 rounded-full object-cover mb-4"
          />

          <motion.img
            src={mypic}
            alt=""
            initial={{ opacity: 0, scale: 0.7, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="size-75 rounded-full object-cover absolute -top-28 "
          />
        </motion.div>

        <motion.h1
          className="w-180 text-center  text-2xl"
          initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "backInOut", delay: 0.3 }}
        >
          AI/ML & Full-Stack Developer | Building Video Understanding Systems
          using Next.js, Hugging Face contributor & Tree-Based Summarizer and
          Vibe Coder using Codex and Claude
        </motion.h1>
      </div>
    </>
  );
};

export default Home;
