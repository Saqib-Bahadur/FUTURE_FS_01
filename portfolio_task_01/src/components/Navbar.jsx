import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 sm:px-8 pt-4">

      {/* Wooden Stick - Left */}
      <div
        className="
          absolute left-2 sm:left-6 top-7
          w-8 h-12
          bg-gradient-to-r from-[#5c351d] via-[#9b6235] to-[#4b2917]
          rounded-full shadow-lg
          border border-[#3b2112]
        "
      />

      {/* Wooden Stick - Right */}
      <div
        className="
          absolute right-2 sm:right-6 top-7
          w-8 h-12
          bg-gradient-to-r from-[#4b2917] via-[#9b6235] to-[#5c351d]
          rounded-full shadow-lg
          border border-[#3b2112]
        "
      />

      {/* Main Letter */}
      <div className="relative max-w-6xl mx-auto">

        {/* Paper */}
        <div
          className="
            relative
            bg-[#f4e7cf]
            text-[#30251c]
            px-8 sm:px-12
            py-5
            shadow-[0_8px_20px_rgba(0,0,0,0.25)]
            border border-[#d4bea0]
          "
        >

          {/* Folded Top Corner */}
          <div
            className="
              absolute
              top-0 right-0
              w-0 h-0
              border-l-[55px] border-l-transparent
              border-t-[55px] border-t-[#c9af8d]
            "
          />

          {/* Fold Shadow */}
          <div
            className="
              absolute
              top-0 right-[1px]
              w-0 h-0
              border-l-[45px] border-l-transparent
              border-t-[45px] border-t-[#a98d69]
              opacity-40
            "
          />

          {/* Navbar Content */}
          <div className="flex items-center justify-between">

            {/* Logo */}
            <div className="flex items-center gap-3">

              <div
                className="
                  w-10 h-10
                  rounded-full
                  bg-[#30251c]
                  text-[#f4e7cf]
                  flex items-center justify-center
                  font-serif
                  text-lg
                  font-bold
                  shadow-md
                "
              >
                SB
              </div>

              <div>
                <h1 className="font-serif text-xl font-bold tracking-wide">
                  Saqib Bahadur
                </h1>

                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.25em]
                    text-[#765f48]
                  "
                >
                  Full Stack Developer
                </p>
              </div>

            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 font-serif text-sm">

              <a
                href="#home"
                className="nav-link"
              >
                Home
              </a>

              <a
                href="#about"
                className="nav-link"
              >
                About
              </a>

              <a
                href="#skills"
                className="nav-link"
              >
                Skills
              </a>

              <a
                href="#projects"
                className="nav-link"
              >
                Projects
              </a>

              <a
                href="#certifications"
                className="nav-link"
              >
                Certifications
              </a>

              <a
                href="#contact"
                className="nav-link"
              >
                Contact
              </a>

            </div>

            {/* Hamburger Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="
                md:hidden
                w-10 h-10
                rounded-full
                border border-[#8b735b]
                flex items-center justify-center
                hover:bg-[#e6d4b8]
                transition
                text-xl
                relative
                z-20
              "
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>

          </div>

          {/* Mobile Navigation */}
          <div
            className={`
              md:hidden
              overflow-hidden
              transition-all
              duration-300
              ${menuOpen ? "max-h-96 mt-6 opacity-100" : "max-h-0 opacity-0"}
            `}
          >

            <div
              className="
                border-t border-[#c9b393]
                pt-4
                flex flex-col
                items-center
                gap-4
                font-serif
              "
            >

              <a
                href="#home"
                onClick={closeMenu}
                className="mobile-link"
              >
                Home
              </a>

              <a
                href="#about"
                onClick={closeMenu}
                className="mobile-link"
              >
                About
              </a>

              <a
                href="#skills"
                onClick={closeMenu}
                className="mobile-link"
              >
                Skills
              </a>

              <a
                href="#projects"
                onClick={closeMenu}
                className="mobile-link"
              >
                Projects
              </a>

              <a
                href="#certifications"
                onClick={closeMenu}
                className="mobile-link"
              >
                Certifications
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="mobile-link"
              >
                Contact
              </a>

            </div>

          </div>

        </div>

        {/* Bottom Fold */}
        <div
          className="
            absolute
            -bottom-3
            left-1/2
            -translate-x-1/2
            w-[92%]
            h-6
            bg-[#dfc9a9]
            -z-10
            shadow-md
          "
        />

      </div>

      {/* Small CSS for navigation hover effects */}
      <style>
        {`
          .nav-link {
            position: relative;
            transition: color 0.3s ease;
          }

          .nav-link:hover {
            color: #8b4f2c;
          }

          .nav-link::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -8px;
            width: 0;
            height: 1px;
            background: #8b4f2c;
            transition: width 0.3s ease;
          }

          .nav-link:hover::after {
            width: 100%;
          }

          .mobile-link {
            width: 100%;
            text-align: center;
            padding: 8px;
            border-radius: 8px;
            transition: all 0.3s ease;
          }

          .mobile-link:hover {
            background: #e6d4b8;
            color: #8b4f2c;
          }
        `}
      </style>

    </nav>
  );
};

export default Navbar;