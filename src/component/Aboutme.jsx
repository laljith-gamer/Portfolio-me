import { motion } from "motion/react";

const Aboutme = () => {
  return (
    <>
      <section className="flex flex-col items-center px-5 pb-24">
        <motion.h1
          className="mt-20 mb-10 text-center text-4xl font-semibold"
          initial={{ opacity: 0, x: -70, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          About Me
        </motion.h1>

        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, x: 90, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
        >
          <p className="text-lg leading-8 text-[#f5f1ff]">
            I believe a good product should feel simple on the surface and
            intelligent underneath. Every interface I build has one goal:
            reduce confusion and help users get results faster. My work focuses
            on combining AI, automation, and full-stack development into
            practical tools. Whether it is video understanding, document
            summarization, or workflow automation, I design systems that convert
            complex input into clear, useful output. I care about structure,
            speed, and real-world usability. A project is not complete just
            because it works; it should be understandable, scalable, and easy
            for someone else to use.
          </p>
        </motion.div>
      </section>
    </>
  );
}

export default Aboutme
