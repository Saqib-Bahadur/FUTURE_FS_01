import React from "react";

const projects = [
  {
    number: "01",
    title: "WorkBridge",
    subtitle: "MERN Stack Job Portal",
    description:
      "A full-stack job platform connecting workers and service providers with authentication, job management, search, filtering, and role-based functionality.",
    image: "/images/WorkBridge.jpg",
    technologies: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "JWT",
    ],
    github:
      "https://github.com/Saqib-Bahadur/WorkBridge-Job-Portal",
    live: "#",
    rotate: "rotate-[-1deg]",
  },

  {
    number: "02",
    title: "Collaborative Docs",
    subtitle: "Real-Time MERN Application",
    description:
      "A real-time collaborative document and notes platform where users can edit content together with Socket.io-powered synchronization.",
    image: "/images/docs.PNG",
    technologies: [
      "React",
      "Node.js",
      "Socket.io",
      "MongoDB",
      "Quill",
    ],
    github:
      "https://github.com/Saqib-Bahadur/Collaborative-Docs-Notes-Platform",
    live: "#",
    rotate: "rotate-[1deg]",
  },

  {
    number: "03",
    title: "Chatting Hub",
    subtitle: "Real-Time Messaging App",
    description:
      "A real-time chat application with user authentication, online presence, and instant messaging powered by Socket.io.",
    image: "/images/HubChatting.jpg",
    technologies: [
      "React",
      "Tailwind",
      "Node.js",
      "Express",
      "Socket.io",
    ],
    github: "https://github.com/Saqib-Bahadur/chat-application",
    live: "#",
    rotate: "rotate-[-1deg]",
  },
  {
  number: "04",
  title: "E-commerce Website (InProgress)",
  subtitle: "Full-Stack E-commerce Application",
  description:
    "A responsive e-commerce web application with product browsing, search, and secure checkout features, focused on providing an intuitive user interface and seamless user experience.",
  image: "/images/Ecommerce.jpg",
  technologies: [
    "React.js",
    "Node.js",
    "Express",
    "MongoDB",
  ],
  github: "#",
  live: "#",
  rotate: "rotate-[1deg]",
},
{
  number: "05",
  title: "Prompt Library",
  subtitle: "AI Prompt Management Platform",
  description:
    "A prompt library platform providing categorized AI prompts for coding, debugging, content creation, and learning, with search, category filtering, save, and like features for quick access.",
  image: "/images/prompt-library.jpg",
  technologies: [
    "React.js",
  ],
  github: "https://github.com/Saqib-Bahadur",
  live: "https://prompt-library-01.netlify.app/",
  rotate: "rotate-[-1deg]",
},
{
  number: "06",
  title: "Product Inventory Management System",
  subtitle: "CRUD-Based Inventory Application",
  description:
    "A responsive product inventory management system supporting complete CRUD operations using JSON Server as a mock backend. Users can add, update, delete, and manage product records efficiently.",
  image: "/images/product-inventory.jpg",
  technologies: [
    "React.js",
    "JSON Server",
  ],
  github:
    "https://github.com/Saqib-Bahadur/Java-FullStack-Training/tree/main/React-Capstone-Project",
  live: "https://product-inventory-system.netlify.app/",
  rotate: "rotate-[1deg]",
},
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="
        relative
        bg-[#e8dcc7]
        px-5 sm:px-8
        py-24 sm:py-32
        overflow-hidden
      "
    >

      {/* Background Word */}
      <div
        className="
          absolute
          top-8
          left-1/2
          -translate-x-1/2
          font-serif
          text-[85px]
          sm:text-[150px]
          font-bold
          text-[#d8c9ae]
          opacity-40
          whitespace-nowrap
          pointer-events-none
        "
      >
        WORK
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

        {/* Top Fold */}
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
            border-t-[#d0b796]
            z-20
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
                Selected work
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
              Things I've
              <br />

              <span className="text-[#8b4f2c] italic">
                built.
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
              A collection of applications I've designed and
              developed while learning, experimenting, and
              solving real-world problems.
            </p>

          </div>


          {/* Projects */}
          <div className="mt-16 space-y-14">

            {projects.map((project, index) => (

              <article
                key={project.number}
                className={`
                  relative
                  bg-[#efe0c5]
                  border
                  border-[#d1b997]
                  shadow-[7px_10px_0px_rgba(96,68,43,0.08)]
                  ${project.rotate}
                  transition-all
                  duration-500
                  hover:rotate-0
                  hover:-translate-y-2
                `}
              >

                {/* Paper Clip */}
                <div
                  className="
                    absolute
                    -top-5
                    right-10
                    w-7
                    h-16
                    border-2
                    border-[#8c806e]
                    rounded-full
                    rotate-[8deg]
                    z-20
                  "
                />


                <div
                  className="
                    grid
                    lg:grid-cols-[1fr_1.1fr]
                    gap-0
                  "
                >

                  {/* Project Image */}

                  <div
                    className="
                      relative
                      min-h-[260px]
                      lg:min-h-[350px]
                      overflow-hidden
                      bg-[#d7c4a3]
                    "
                  >

                    <img
                      src={project.image}
                      alt={project.title}
                      className="
                        absolute
                        inset-0
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-700
                        hover:scale-105
                      "
                    />


                    {/* Image Overlay */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-[#30251c]
                        opacity-10
                        pointer-events-none
                      "
                    />


                    {/* Project Number */}
                    <div
                      className="
                        absolute
                        top-5
                        left-5
                        w-12
                        h-12
                        rounded-full
                        bg-[#f4e7cf]
                        border
                        border-[#cdb697]
                        flex
                        items-center
                        justify-center
                        font-serif
                        font-bold
                        text-[#8b4f2c]
                        shadow-md
                      "
                    >
                      {project.number}
                    </div>

                  </div>


                  {/* Project Information */}

                  <div
                    className="
                      p-7
                      sm:p-9
                      lg:p-10
                      flex
                      flex-col
                      justify-center
                    "
                  >

                    {/* Subtitle */}

                    <p
                      className="
                        text-xs
                        uppercase
                        tracking-[0.2em]
                        text-[#9a8061]
                      "
                    >
                      {project.subtitle}
                    </p>


                    {/* Title */}

                    <h3
                      className="
                        mt-2
                        font-serif
                        text-3xl
                        sm:text-4xl
                        font-bold
                        text-[#30251c]
                      "
                    >
                      {project.title}
                    </h3>


                    {/* Divider */}

                    <div
                      className="
                        mt-5
                        w-14
                        h-[2px]
                        bg-[#8b4f2c]
                      "
                    />


                    {/* Description */}

                    <p
                      className="
                        mt-6
                        text-[#6d5943]
                        leading-relaxed
                      "
                    >
                      {project.description}
                    </p>


                    {/* Technologies */}

                    <div
                      className="
                        mt-6
                        flex
                        flex-wrap
                        gap-2
                      "
                    >

                      {project.technologies.map((tech) => (

                        <span
                          key={tech}
                          className="
                            px-3
                            py-1.5
                            rounded-full
                            bg-[#f4e7cf]
                            border
                            border-[#d1b997]
                            text-[11px]
                            text-[#765f48]
                          "
                        >
                          {tech}
                        </span>

                      ))}

                    </div>


                    {/* Buttons */}

                    <div
                      className="
                        mt-8
                        flex
                        flex-wrap
                        gap-3
                      "
                    >

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          items-center
                          gap-2
                          px-5
                          py-2.5
                          bg-[#30251c]
                          text-[#f4e7cf]
                          text-sm
                          font-semibold
                          transition-all
                          duration-300
                          hover:bg-[#8b4f2c]
                          hover:-translate-y-1
                        "
                      >
                          {project.github === "#" ? "In Progress" : "GitHub"}
                      </a>


                      <a
                        href={project.live}
                        className="
                          inline-flex
                          items-center
                          gap-2
                          px-5
                          py-2.5
                          border
                          border-[#8b735b]
                          text-[#30251c]
                          text-sm
                          font-semibold
                          transition-all
                          duration-300
                          hover:bg-[#e0ccb0]
                          hover:-translate-y-1
                        "
                      >
                          {project.live === "#" ? "In Progress" : "Live Demo"}
                      </a>

                    </div>

                  </div>

                </div>

              </article>

            ))}

          </div>


          {/* Project Footer */}

          <div
            className="
              mt-16
              flex
              flex-col
              sm:flex-row
              sm:items-center
              justify-between
              gap-4
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
              ✦ More experiments are always in progress.
            </p>

            <a
              href="https://github.com/Saqib-Bahadur"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-xs
                uppercase
                tracking-[0.2em]
                text-[#8b4f2c]
                hover:underline
              "
            >
              Explore GitHub →
            </a>

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

export default Projects;
