import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Message submitted:", formData);

    alert("Thank you! Your message has been received.");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="relative bg-[#e8dcc7] px-4 py-20 sm:px-6 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 font-serif text-sm italic tracking-widest text-[#8b4f2c]">
            Have something in mind?
          </p>

          <h2 className="font-serif text-4xl font-bold text-[#30251c] sm:text-5xl">
            Write Back
          </h2>

          <div className="mx-auto mt-5 h-px w-24 bg-[#8b4f2c]" />

          <p className="mx-auto mt-5 max-w-xl font-sans text-sm leading-7 text-[#765f48] sm:text-base">
            Whether you have a project idea, internship opportunity, or simply
            want to connect, I'd love to hear from you.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Left Side */}
          <div className="relative">

            {/* Paper */}
            <div className="relative h-full min-h-[480px] overflow-hidden bg-[#f4e7cf] p-7 shadow-[7px_9px_0px_rgba(48,37,28,0.13)] sm:p-10">

              {/* Paper Lines */}
              <div
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, transparent 0px, transparent 31px, #c9af8d 32px)",
                }}
              />

              <div className="relative">

                {/* Stamp */}
                <div className="absolute right-0 top-0 flex h-20 w-20 rotate-12 items-center justify-center rounded-full border-2 border-dashed border-[#8b4f2c] text-center font-serif text-[10px] uppercase leading-4 text-[#8b4f2c]">
                  Let's
                  <br />
                  Talk
                </div>

                <p className="font-serif text-sm italic text-[#765f48]">
                  Dear future connection,
                </p>

                <h3 className="mt-8 max-w-sm font-serif text-3xl font-bold leading-tight text-[#30251c]">
                  Let's start a conversation.
                </h3>

                <p className="mt-6 max-w-md font-sans text-sm leading-7 text-[#765f48]">
                  I'm always interested in discussing interesting projects,
                  development opportunities, collaborations, and ideas that
                  can turn into something useful.
                </p>

                {/* Contact Details */}
                <div className="mt-10 space-y-6">

                  <div>
                    <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#8b4f2c]">
                      Email
                    </p>

                    <a
                      href="mailto:saqibbahadur2625@gmail.com"
                      className="mt-1 block font-serif text-lg text-[#30251c] hover:text-[#8b4f2c]"
                    >
                      saqibbahadur2625@gmail.com
                    </a>
                  </div>

                  <div>
                    <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#8b4f2c]">
                      GitHub
                    </p>

                    <a
                      href="https://github.com/Saqib-Bahadur"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block font-serif text-lg text-[#30251c] hover:text-[#8b4f2c]"
                    >
                      github.com/Saqib-Bahadur
                    </a>
                  </div>

                  <div>
                    <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#8b4f2c]">
                      LinkedIn
                    </p>

                    <a
                      href="https://www.linkedin.com/in/saqib-bahadur-6a779740b"
                      className="mt-1 block font-serif text-lg text-[#30251c] hover:text-[#8b4f2c]"
                    >
                      saqib-bahadur-6a779740b
                    </a>
                  </div>
                </div>

                {/* Handwritten Note */}
                <p className="mt-12 rotate-[-2deg] font-serif text-sm italic text-[#765f48]">
                  ✦ Good things often start with a simple hello.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="relative">

            {/* Paper Clip */}
            <div className="absolute -right-1 -top-5 z-20 h-14 w-7 rotate-12 rounded-full border-2 border-[#765f48]" />

            <form
              onSubmit={handleSubmit}
              className="relative overflow-hidden border border-[#d4c0a4] bg-[#f4e7cf] p-7 shadow-[7px_9px_0px_rgba(48,37,28,0.13)] sm:p-10"
            >

              {/* Paper Lines */}
              <div
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, transparent 0px, transparent 31px, #c9af8d 32px)",
                }}
              />

              <div className="relative">

                <div className="mb-8">
                  <p className="font-serif text-sm italic text-[#765f48]">
                    Leave me a note
                  </p>

                  <h3 className="mt-2 font-serif text-2xl font-bold text-[#30251c]">
                    Your message
                  </h3>
                </div>

                {/* Name */}
                <div className="mb-7">
                  <label
                    htmlFor="name"
                    className="mb-2 block font-sans text-xs font-bold uppercase tracking-widest text-[#8b4f2c]"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full border-b-2 border-[#c9af8d] bg-transparent px-1 py-3 font-serif text-lg text-[#30251c] outline-none placeholder:text-[#a58d72] focus:border-[#8b4f2c]"
                  />
                </div>

                {/* Email */}
                <div className="mb-7">
                  <label
                    htmlFor="email"
                    className="mb-2 block font-sans text-xs font-bold uppercase tracking-widest text-[#8b4f2c]"
                  >
                    Your Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full border-b-2 border-[#c9af8d] bg-transparent px-1 py-3 font-serif text-lg text-[#30251c] outline-none placeholder:text-[#a58d72] focus:border-[#8b4f2c]"
                  />
                </div>

                {/* Message */}
                <div className="mb-8">
                  <label
                    htmlFor="message"
                    className="mb-2 block font-sans text-xs font-bold uppercase tracking-widest text-[#8b4f2c]"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Write your message here..."
                    className="w-full resize-none border-b-2 border-[#c9af8d] bg-transparent px-1 py-3 font-serif text-lg leading-8 text-[#30251c] outline-none placeholder:text-[#a58d72] focus:border-[#8b4f2c]"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 bg-[#30251c] px-7 py-4 font-sans text-xs font-bold uppercase tracking-widest text-[#f4e7cf] transition duration-300 hover:-translate-y-1 hover:bg-[#8b4f2c]"
                >
                  Send My Letter
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>

                <p className="mt-6 font-serif text-xs italic text-[#765f48]">
                  I'll get back to you as soon as possible.
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <p className="font-serif text-sm italic text-[#765f48]">
            ✦ Every great collaboration starts with a conversation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;