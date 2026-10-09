import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#30251c] text-[#f4e7cf]">

      {/* Main Footer */}

      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-16">

        <div
          className="
            grid
            md:grid-cols-[1.3fr_0.7fr_0.7fr]
            gap-12
          "
        >

          {/* Brand */}

          <div>

            <div className="flex items-center gap-3">

              <div
                className="
                  w-11
                  h-11
                  rounded-full
                  bg-[#f4e7cf]
                  text-[#30251c]
                  flex
                  items-center
                  justify-center
                  font-serif
                  font-bold
                  text-lg
                "
              >
                SB
              </div>

              <div>

                <h3
                  className="
                    font-serif
                    text-xl
                    font-bold
                  "
                >
                  Saqib Bahadur
                </h3>

                <p
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.25em]
                    text-[#cbb99f]
                  "
                >
                  Full Stack Developer
                </p>

              </div>

            </div>


            <p
              className="
                mt-6
                max-w-md
                text-[#cbbda8]
                leading-relaxed
              "
            >
              Building thoughtful digital experiences with
              modern technologies, curiosity, and a little
              attention to detail.
            </p>


            {/* Signature */}

            <p
              className="
                mt-7
                font-serif
                italic
                text-[#c19a72]
                text-lg
              "
            >
              — Saqib
            </p>

          </div>


          {/* Navigation */}

          <div>

            <p
              className="
                text-xs
                uppercase
                tracking-[0.2em]
                text-[#c19a72]
                mb-5
              "
            >
              Navigate
            </p>

            <div className="flex flex-col gap-3">

              <a
                href="#home"
                className="footer-link"
              >
                Home
              </a>

              <a
                href="#about"
                className="footer-link"
              >
                About
              </a>

              <a
                href="#skills"
                className="footer-link"
              >
                Skills
              </a>

              <a
                href="#projects"
                className="footer-link"
              >
                Projects
              </a>

              <a
                href="#certifications"
                className="footer-link"
              >
                Certifications
              </a>

              <a
                href="#contact"
                className="footer-link"
              >
                Contact
              </a>

            </div>

          </div>


          {/* Social */}

          <div>

            <p
              className="
                text-xs
                uppercase
                tracking-[0.2em]
                text-[#c19a72]
                mb-5
              "
            >
              Find me
            </p>

            <div className="flex flex-col gap-3">

              <a
                href="https://github.com/Saqib-Bahadur"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/saqib-bahadur-6a779740b"
                className="footer-link"
              >
                LinkedIn ↗
              </a>

              <a
                href="mailto:saqibbahadur2625@gmail.com"
                className="footer-link"
              >
                Email ↗
              </a>

            </div>

          </div>

        </div>


        {/* Divider */}

        <div className="mt-14 border-t border-[#574638]" />


        {/* Bottom */}

        <div
          className="
            mt-6
            flex
            flex-col
            sm:flex-row
            justify-between
            gap-3
            text-xs
            text-[#9f907c]
          "
        >

          <p>
            © 2026 Saqib Bahadur. All rights reserved.
          </p>

          <p className="font-serif italic">
            Made with curiosity & code.
          </p>

        </div>

      </div>


      {/* Footer CSS */}

      <style>
        {`
          .footer-link {
            color: #cbbda8;
            transition: all 0.3s ease;
            width: fit-content;
          }

          .footer-link:hover {
            color: #f4e7cf;
            transform: translateX(4px);
          }
        `}
      </style>

    </footer>
  );
};

export default Footer;
