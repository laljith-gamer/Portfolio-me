import React from 'react'
const Aboutme = () => {
  return (
    <>
      <div>
        <h1 className="text-4xl text-center mt-20 mb-10">About Me</h1>
        <div className="lg:flex items-center block mx-auto max-w-300 justify-items-center mb-20">
          <div className="lg:w-1/2 p-4 lg:block hidden">
          </div>
          <div className="lg:w-1/2 p-4  text-center md:mx-20 mx-5 ">
            <p className="text-lg">
              I believe a good product should feel simple on the surface and
              intelligent underneath. Every interface I build has one goal:
              reduce confusion and help users get results faster. My work
              focuses on combining AI, automation, and full-stack development
              into practical tools. Whether it is video understanding, document
              summarization, or workflow automation, I design systems that
              convert complex input into clear, useful output. I care about
              structure, speed, and real-world usability. A project is not
              complete just because it works; it should be understandable,
              scalable, and easy for someone else to use
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutme
