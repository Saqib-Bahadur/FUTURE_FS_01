import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="
        relative
        bg-[#e8dcc7]
        px-5 sm:px-8
        py-24 sm:py-32
        overflow-hidden
      "
    >

      {/* Decorative Background Text */}
      <div
        className="
          absolute
          -top-6
          left-1/2
          -translate-x-1/2
          font-serif
          text-[100px]
          sm:text-[160px]
          font-bold
          text-[#d8c9ae]
          opacity-40
          whitespace-nowrap
          pointer-events-none
        "
      >
        ABOUT
      </div>


      {/* Main Letter Sheet */}
      <div
        className="
          relative
          max-w-6xl
          mx-auto
          bg-[#f4e7cf]
          border
          border-[#d4bea0]
          shadow-[0_18px_45px_rgba(48,37,28,0.15)]
          overflow-hidden
        "
      >

        {/* Top Fold */}
        <div
          className="
            absolute
            top-0
            right-0
            w-0
            h-0
            border-l-[90px]
            border-l-transparent
            border-t-[90px]
            border-t-[#d0b796]
            z-10
          "
        />

        {/* Fold Shadow */}
        <div
          className="
            absolute
            top-0
            right-0
            w-0
            h-0
            border-l-[75px]
            border-l-transparent
            border-t-[75px]
            border-t-[#a98d69]
            opacity-25
          "
        />


        {/* Paper Lines */}
        <div
          className="
            absolute
            inset-0
            pointer-events-none
            opacity-20
            bg-[repeating-linear-gradient(
              transparent,
              transparent_34px,
              #9f8665_35px
            )]
          "
        />


        {/* Content */}
        <div
          className="
            relative
            z-20
            grid
            lg:grid-cols-[0.9fr_1.1fr]
            gap-14
            lg:gap-20
            px-7
            sm:px-12
            lg:px-20
            py-20
            sm:py-24
          "
        >

          {/* ========================= */}
          {/* LEFT - PHOTO */}
          {/* ========================= */}

          <div className="flex justify-center lg:justify-start">

            <div className="relative">

              {/* Decorative Tape */}
              <div
                className="
                  absolute
                  -top-5
                  left-1/2
                  -translate-x-1/2
                  w-28
                  h-10
                  bg-[#d8c49f]
                  opacity-80
                  rotate-[-3deg]
                  z-20
                "
              />

              {/* Photograph */}
              <div
                className="
                  relative
                  w-[270px]
                  sm:w-[320px]
                  bg-[#fffaf0]
                  p-4
                  pb-14
                  shadow-[10px_14px_25px_rgba(48,37,28,0.18)]
                  rotate-[-3deg]
                  transition-all
                  duration-500
                  hover:rotate-0
                  hover:-translate-y-2
                "
              >

                <div className="overflow-hidden bg-[#d9c9ad]">

                  <img
                    src="/images/saqib.jpeg"
                    alt="Saqib Bahadur"
                    className="
                      w-full
                      aspect-[4/5]
                      object-cover
                      grayscale-[15%]
                      transition-all
                      duration-500
                      hover:scale-105
                    "
                  />

                </div>


                {/* Photo Caption */}
                <div
                  className="
                    absolute
                    bottom-3
                    left-0
                    w-full
                    text-center
                    font-serif
                    italic
                    text-[#765f48]
                    text-sm
                  "
                >
                  Saqib Bahadur · 2026
                </div>

              </div>


              {/* Small Paper Note */}
              <div
                className="
                  absolute
                  -bottom-12
                  -right-12
                  sm:-right-16
                  w-40
                  bg-[#ead9ba]
                  border
                  border-[#cdb697]
                  p-4
                  shadow-md
                  rotate-[7deg]
                  z-20
                "
              >

                <p
                  className="
                    font-serif
                    italic
                    text-[#765f48]
                    text-sm
                    leading-relaxed
                  "
                >
                  "Build with curiosity.
                  Improve with every
                  project."
                </p>

              </div>


              {/* Stamp */}
              <div
                className="
                  absolute
                  -left-8
                  bottom-5
                  w-20
                  h-20
                  rounded-full
                  border-2
                  border-dashed
                  border-[#8b4f2c]
                  flex
                  items-center
                  justify-center
                  rotate-[-12deg]
                  bg-[#f4e7cf]
                  z-20
                "
              >

                <div
                  className="
                    w-14
                    h-14
                    rounded-full
                    border
                    border-[#8b4f2c]
                    flex
                    items-center
                    justify-center
                    text-[8px]
                    uppercase
                    tracking-[0.15em]
                    text-[#8b4f2c]
                    text-center
                  "
                >
                  About<br />
                  Me
                </div>

              </div>

            </div>

          </div>


          {/* ========================= */}
          {/* RIGHT - CONTENT */}
          {/* ========================= */}

          <div className="flex flex-col justify-center">

            {/* Section Label */}

            <div className="flex items-center gap-3 mb-5">

              <span
                className="
                  w-10
                  h-[1px]
                  bg-[#8b4f2c]
                "
              />

              <p
                className="
                  uppercase
                  tracking-[0.25em]
                  text-xs
                  font-semibold
                  text-[#8b4f2c]
                "
              >
                A little about me
              </p>

            </div>


            {/* Heading */}

            <h2
              className="
                font-serif
                text-4xl
                sm:text-5xl
                lg:text-6xl
                font-bold
                text-[#30251c]
                leading-tight
              "
            >
              More than just
              <br />

              <span className="text-[#8b4f2c] italic">
                writing code.
              </span>
            </h2>


            {/* Introduction */}

            <p
              className="
                mt-8
                text-[#5d4b38]
                text-lg
                leading-relaxed
              "
            >
              I'm Saqib Bahadur, an aspiring Full Stack Developer
              and B.Tech student who enjoys turning ideas into
              useful digital experiences.
            </p>


            <p
              className="
                mt-5
                text-[#6d5943]
                leading-relaxed
              "
            >
              My current focus is the MERN stack — building
              responsive interfaces with React, developing
              reliable backend APIs with Node.js and Express,
              and working with MongoDB to create complete
              full-stack applications.
            </p>


            <p
              className="
                mt-5
                text-[#6d5943]
                leading-relaxed
              "
            >
              I'm also exploring AI integration, system design,
              and better ways to build applications that are
              scalable, practical, and enjoyable to use.
            </p>


            {/* Personal Details */}

            <div
              className="
                mt-9
                grid
                grid-cols-2
                sm:grid-cols-3
                gap-y-7
                gap-x-5
                border-t
                border-[#d4bea0]
                pt-7
              "
            >

              <div>
                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-[#9a8061]
                  "
                >
                  Focus
                </p>

                <p
                  className="
                    mt-1
                    font-serif
                    text-[#30251c]
                  "
                >
                  Full Stack
                </p>
              </div>


              <div>
                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-[#9a8061]
                  "
                >
                  Stack
                </p>

                <p
                  className="
                    mt-1
                    font-serif
                    text-[#30251c]
                  "
                >
                  MERN
                </p>
              </div>


              <div>
                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-[#9a8061]
                  "
                >
                  Learning
                </p>

                <p
                  className="
                    mt-1
                    font-serif
                    text-[#30251c]
                  "
                >
                  AI + DSA
                </p>
              </div>

            </div>


            {/* Resume Button */}

            <div className="mt-9">

              <a
                href="/resume/Saqib_Bahadur.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-6
                  py-3
                  border
                  border-[#8b4f2c]
                  text-[#8b4f2c]
                  font-semibold
                  text-sm
                  transition-all
                  duration-300
                  hover:bg-[#8b4f2c]
                  hover:text-[#f4e7cf]
                  hover:-translate-y-1
                "
              >
                Read My Resume

              </a>

            </div>

          </div>

        </div>


        {/* Bottom Fold */}

        <div
          className="
            absolute
            bottom-0
            left-0
            w-full
            h-7
            bg-[#dfc9a9]
            border-t
            border-[#c7aa83]
          "
        />

      </div>

    </section>
  );
};

export default About;
