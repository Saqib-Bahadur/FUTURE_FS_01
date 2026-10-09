import React from "react";

const skills = [
  {
    category: "Frontend",
    number: "01",
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Responsive UI"],
  },
  {
    category: "Backend",
    number: "02",
    items: ["Node.js", "Express.js", "REST APIs", "Authentication", "JWT", "Socket.io"],
  },
  {
    category: "Database",
    number: "03",
    items: ["MongoDB", "Mongoose", "CRUD", "Data Modeling"],
  },
  {
    category: "Programming",
    number: "04",
    items: ["Java", "DSA", "OOP", "Problem Solving"],
  },
  {
    category: "Tools",
    number: "05",
    items: ["Git", "GitHub", "Postman", "VS Code", "npm"],
  },
  {
    category: "Exploring",
    number: "06",
    items: ["AI Integration", "System Design", "Redis", "Caching", "Rate Limiting"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="
        relative
        bg-[#e8dcc7]
        px-5 sm:px-8
        py-24 sm:py-32
        overflow-hidden
      "
    >

      {/* Background Label */}
      <div
        className="
          absolute
          top-10
          left-1/2
          -translate-x-1/2
          font-serif
          text-[90px]
          sm:text-[150px]
          font-bold
          text-[#d8c9ae]
          opacity-40
          whitespace-nowrap
          pointer-events-none
        "
      >
        TOOLBOX
      </div>


      {/* Main Paper */}
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

        {/* Fold */}
        <div
          className="
            absolute
            top-0
            left-0
            w-0
            h-0
            border-r-[90px]
            border-r-transparent
            border-t-[90px]
            border-t-[#d0b796]
          "
        />

        {/* Paper Texture */}
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
            z-10
            px-7
            sm:px-12
            lg:px-20
            py-20
            sm:py-24
          "
        >

          {/* Heading */}
          <div className="max-w-2xl">

            <div className="flex items-center gap-3 mb-5">

              <span className="w-10 h-[1px] bg-[#8b4f2c]" />

              <p
                className="
                  uppercase
                  tracking-[0.25em]
                  text-xs
                  font-semibold
                  text-[#8b4f2c]
                "
              >
                Things I work with
              </p>

            </div>


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
              My digital
              <br />

              <span className="text-[#8b4f2c] italic">
                toolbox.
              </span>
            </h2>


            <p
              className="
                mt-6
                text-[#6d5943]
                leading-relaxed
                max-w-xl
              "
            >
              These are the technologies, tools, and concepts I
              use while building applications — from creating
              interfaces to designing backend systems.
            </p>

          </div>


          {/* Skill Inventory */}
          <div
            className="
              mt-16
              grid
              sm:grid-cols-2
              lg:grid-cols-3
              gap-6
            "
          >

            {skills.map((skill) => (

              <div
                key={skill.number}
                className="
                  group
                  relative
                  bg-[#efe0c5]
                  border
                  border-[#d1b997]
                  p-6
                  min-h-[220px]
                  shadow-[5px_7px_0px_rgba(96,68,43,0.08)]
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-[8px_12px_0px_rgba(96,68,43,0.12)]
                "
              >

                {/* Number */}
                <span
                  className="
                    absolute
                    top-4
                    right-5
                    font-serif
                    text-4xl
                    font-bold
                    text-[#d1b997]
                    group-hover:text-[#c19d73]
                    transition-colors
                  "
                >
                  {skill.number}
                </span>


                {/* Category */}
                <h3
                  className="
                    relative
                    font-serif
                    text-2xl
                    font-bold
                    text-[#30251c]
                  "
                >
                  {skill.category}
                </h3>


                {/* Small Line */}
                <div
                  className="
                    mt-4
                    w-12
                    h-[2px]
                    bg-[#8b4f2c]
                    transition-all
                    duration-300
                    group-hover:w-20
                  "
                />


                {/* Skills */}
                <div
                  className="
                    flex
                    flex-wrap
                    gap-2
                    mt-6
                  "
                >

                  {skill.items.map((item) => (

                    <span
                      key={item}
                      className="
                        px-3
                        py-1.5
                        bg-[#f4e7cf]
                        border
                        border-[#d2bb99]
                        text-[#765f48]
                        text-xs
                        rounded-full
                        transition-all
                        duration-300
                        group-hover:border-[#b88d61]
                      "
                    >
                      {item}
                    </span>

                  ))}

                </div>

              </div>

            ))}

          </div>


          {/* Bottom Note */}
          <div
            className="
              mt-14
              flex
              flex-col
              sm:flex-row
              sm:items-center
              justify-between
              gap-5
              border-t
              border-[#d4bea0]
              pt-7
            "
          >

            <p
              className="
                font-serif
                italic
                text-[#765f48]
              "
            >
              ✦ Always learning. Always building.
            </p>

            <p
              className="
                text-xs
                uppercase
                tracking-[0.2em]
                text-[#9a8061]
              "
            >
              Updated · 2026
            </p>

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

export default Skills;