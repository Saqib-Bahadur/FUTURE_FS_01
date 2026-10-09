import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        bg-[#e8dcc7]
        px-5 sm:px-8
        pt-36 pb-20
        overflow-hidden
      "
    >

      {/* Decorative Background Elements */}

      <div
        className="
          absolute
          top-32
          left-[8%]
          w-24
          h-24
          rounded-full
          border border-[#b99f7b]
          opacity-30
        "
      />

      <div
        className="
          absolute
          bottom-20
          right-[8%]
          w-32
          h-32
          rounded-full
          border border-[#b99f7b]
          opacity-20
        "
      />


      {/* Main Letter */}

      <div
        className="
          relative
          max-w-6xl
          mx-auto
          bg-[#f4e7cf]
          border border-[#d4bea0]
          shadow-[0_20px_50px_rgba(48,37,28,0.18)]
          min-h-[650px]
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
            border-l-[120px]
            border-l-transparent
            border-t-[120px]
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
            border-l-[100px]
            border-l-transparent
            border-t-[100px]
            border-t-[#aa8c66]
            opacity-30
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
            min-h-[650px]
            flex
            items-center
            px-7 sm:px-12 lg:px-20
            py-20
          "
        >

          <div className="max-w-4xl">

            {/* Small Letter Heading */}

            <div
              className="
                flex
                items-center
                gap-3
                mb-8
              "
            >

              <span
                className="
                  w-10
                  h-[1px]
                  bg-[#8b4f2c]
                "
              />

              <p
                className="
                  font-serif
                  italic
                  text-[#765f48]
                  text-sm
                  tracking-wide
                "
              >
                Dear visitor,
              </p>

            </div>


            {/* Main Heading */}

            <h1
              className="
                font-serif
                text-[#30251c]
                text-5xl
                sm:text-6xl
                lg:text-8xl
                font-bold
                leading-[0.95]
                tracking-tight
              "
            >
              I'm{" "}
              <span className="text-[#8b4f2c]">
                Saqib.
              </span>
            </h1>


            {/* Role */}

            <div className="mt-6">

              <p
                className="
                  uppercase
                  tracking-[0.3em]
                  text-[#765f48]
                  text-xs
                  sm:text-sm
                  font-semibold
                "
              >
                Full Stack Developer
              </p>

            </div>


            {/* Main Description */}

            <p
              className="
                mt-8
                max-w-2xl
                text-[#5d4b38]
                text-lg
                sm:text-xl
                leading-relaxed
              "
            >
              I design and build modern web applications that
              combine thoughtful user experiences with reliable
              full-stack engineering.
            </p>


            {/* Handwritten Note */}

            <div
              className="
                mt-7
                font-serif
                italic
                text-[#8b4f2c]
                text-base
                sm:text-lg
              "
            >
              <span className="text-2xl">✦</span>{" "}
              Turning ideas into something people can use.
            </div>


            {/* Buttons */}

            <div
              className="
                mt-10
                flex
                flex-col
                sm:flex-row
                gap-4
              "
            >

              <a
                href="#projects"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  px-7
                  py-3.5
                  bg-[#30251c]
                  text-[#f4e7cf]
                  font-semibold
                  text-sm
                  tracking-wide
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#8b4f2c]
                "
              >
                View My Work

                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </a>


              <a
                href="#contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-7
                  py-3.5
                  border
                  border-[#8b735b]
                  text-[#30251c]
                  font-semibold
                  text-sm
                  tracking-wide
                  transition-all
                  duration-300
                  hover:bg-[#e5d3b5]
                  hover:-translate-y-1
                "
              >
                Write to Me
              </a>

            </div>


            {/* Small Details */}

            <div
              className="
                mt-14
                flex
                flex-wrap
                gap-x-8
                gap-y-3
                text-xs
                uppercase
                tracking-[0.18em]
                text-[#8a755d]
              "
            >

              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>Java</span>

            </div>

          </div>


          {/* Right Decorative Area */}

          <div
            className="
              hidden
              lg:block
              absolute
              right-16
              bottom-16
              w-52
              h-64
            "
          >

            {/* Developer Note */}

            <div
              className="
                absolute
                inset-0
                bg-[#efe0c5]
                border
                border-[#cdb697]
                shadow-[8px_10px_0px_rgba(96,68,43,0.12)]
                rotate-6
                p-6
              "
            >

              <p
                className="
                  font-serif
                  italic
                  text-[#765f48]
                  text-sm
                "
              >
                Notes from the desk
              </p>

              <div className="mt-5 space-y-4">

                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#9a8061]">
                    Currently
                  </p>

                  <p className="font-serif text-sm mt-1">
                    Building for the web
                  </p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#9a8061]">
                    Learning
                  </p>

                  <p className="font-serif text-sm mt-1">
                    AI + System Design
                  </p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#9a8061]">
                    Passion
                  </p>

                  <p className="font-serif text-sm mt-1">
                    Clean digital experiences
                  </p>
                </div>

              </div>

            </div>


            {/* Stamp */}

            <div
              className="
                absolute
                -bottom-5
                -right-5
                w-20
                h-20
                rounded-full
                border-2
                border-dashed
                border-[#8b4f2c]
                flex
                items-center
                justify-center
                rotate-[-15deg]
                bg-[#f4e7cf]
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
                  text-[9px]
                  uppercase
                  tracking-widest
                  text-[#8b4f2c]
                  text-center
                "
              >
                Open<br />
                Ideas
              </div>

            </div>

          </div>

        </div>


        {/* Bottom Paper Fold */}

        <div
          className="
            absolute
            bottom-0
            left-0
            w-full
            h-8
            bg-[#dfc9a9]
            border-t
            border-[#c7aa83]
          "
        />

        {/* Bottom Fold Triangle */}

        <div
          className="
            absolute
            bottom-8
            right-0
            w-0
            h-0
            border-l-[90px]
            border-l-transparent
            border-b-[55px]
            border-b-[#c9af8d]
          "
        />

      </div>


      {/* Scroll Indicator */}

      <div
        className="
          absolute
          bottom-5
          left-1/2
          -translate-x-1/2
          flex
          flex-col
          items-center
          gap-2
          text-[#765f48]
        "
      >

        <span
          className="
            text-[9px]
            uppercase
            tracking-[0.3em]
          "
        >
          Scroll
        </span>

        <div
          className="
            w-[1px]
            h-8
            bg-[#8b735b]
            animate-pulse
          "
        />

      </div>

    </section>
  );
};

export default Hero;