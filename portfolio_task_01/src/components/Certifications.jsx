import React from "react";

const certifications = [
  {
    number: "01",
    title: "Career Essentials in Generative AI by Microsoft and LinkedIn",
    issuer: "Microsoft & LinkedIn",
    date: "2026",
    type: "Certification",
    file: "/certificates/Microsoft_LinkedIn.pdf",
  },
  {
    number: "02",
    title: "TCS iON Career Edge - Young Professional",
    issuer: "TCS",
    date: "2026",
    type: "Certification",
    file: "/certificates/TCS.pdf",
  },
  {
    number: "03",
    title: "Programming with Python 3.X",
    issuer: "Simplelearn | SkillUp",
    date: "2025",
    type: "Certification",
    file: "/certificates/Python.pdf",
  },
  {
    number: "04",
    title: "Web development",
    issuer: "ITnium",
    date: "2023",
    type: "Training",
    file: "/certificates/ITnium.pdf",
  },
];

const jobSimulation = {
  title: "Job Simulation / Virtual Internship",
  issuer: "Forage",
  date: "2026",
  type: "Professional Experience",
  file: "/certificates/YC_Internship.pdf",
};

function Certifications() {
  return (
    <section
      id="certifications"
      className="relative bg-[#e8dcc7] px-4 py-20 sm:px-6 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 font-serif text-sm italic tracking-widest text-[#8b4f2c]">
            My achievements
          </p>

          <h2 className="font-serif text-4xl font-bold text-[#30251c] sm:text-5xl">
            Certifications
          </h2>

          <div className="mx-auto mt-5 h-px w-24 bg-[#8b4f2c]" />

          <p className="mx-auto mt-5 max-w-2xl font-sans text-sm leading-7 text-[#765f48] sm:text-base">
            A collection of certifications and professional learning
            experiences that reflect my continuous growth as a developer.
          </p>
        </div>

        {/* Certificates */}
        <div className="grid gap-8 sm:grid-cols-2">

          {certifications.map((certificate, index) => (
            <div
              key={certificate.number}
              className={`group relative ${
                index % 2 === 0 ? "-rotate-[1deg]" : "rotate-[1deg]"
              }`}
            >
              {/* Paper Clip */}
              <div className="absolute -right-2 -top-5 z-20 h-12 w-6 rotate-12 rounded-full border-2 border-[#765f48]" />

              {/* Certificate Paper */}
              <div className="relative overflow-hidden border border-[#d4c0a4] bg-[#f4e7cf] p-6 shadow-[6px_8px_0px_rgba(48,37,28,0.12)] transition duration-300 group-hover:-translate-y-2 group-hover:rotate-0 group-hover:shadow-[10px_14px_0px_rgba(48,37,28,0.16)]">

                {/* Paper Lines */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(to bottom, transparent 0px, transparent 31px, #c9af8d 32px)",
                  }}
                />

                {/* Number */}
                <div className="relative mb-6 flex items-center justify-between">
                  <span className="font-serif text-4xl font-bold text-[#c9af8d]">
                    {certificate.number}
                  </span>

                  <span className="rounded-full border border-[#8b4f2c] px-3 py-1 font-sans text-[10px] uppercase tracking-widest text-[#8b4f2c]">
                    {certificate.type}
                  </span>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="font-serif text-2xl font-bold text-[#30251c]">
                    {certificate.title}
                  </h3>

                  <p className="mt-3 font-sans text-sm font-semibold text-[#8b4f2c]">
                    {certificate.issuer}
                  </p>

                  <p className="mt-2 font-sans text-sm text-[#765f48]">
                    Issued: {certificate.date}
                  </p>

                  <div className="mt-7 flex items-center justify-between">
                    <span className="font-serif text-sm italic text-[#765f48]">
                      Verified achievement
                    </span>

                    <a
                      href={certificate.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-b-2 border-[#8b4f2c] pb-1 font-sans text-xs font-bold uppercase tracking-wider text-[#8b4f2c] transition hover:text-[#30251c]"
                    >
                      View Certificate →
                    </a>
                  </div>
                </div>

                {/* Stamp */}
                <div className="absolute bottom-5 right-5 flex h-16 w-16 rotate-[-12deg] items-center justify-center rounded-full border-2 border-dashed border-[#8b4f2c] text-center font-serif text-[9px] uppercase leading-3 text-[#8b4f2c]">
                  Certified
                  <br />
                  2026
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Job Simulation */}
        <div className="mt-14">
          <div className="mb-5 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#c9af8d]" />

            <span className="font-serif text-sm italic text-[#8b4f2c]">
              Professional Experience
            </span>

            <div className="h-px flex-1 bg-[#c9af8d]" />
          </div>

          <div className="relative mx-auto max-w-3xl -rotate-[0.5deg]">
            {/* Special Paper */}
            <div className="relative overflow-hidden border-2 border-[#8b4f2c] bg-[#f4e7cf] p-7 shadow-[8px_10px_0px_rgba(48,37,28,0.14)] sm:p-10">

              <div className="absolute right-5 top-5 rotate-12 rounded-sm border-2 border-[#8b4f2c] px-3 py-2 font-serif text-[10px] font-bold uppercase tracking-widest text-[#8b4f2c]">
                Job Simulation
              </div>

              <p className="font-serif text-sm italic text-[#765f48]">
                Professional Learning Document
              </p>

              <h3 className="mt-4 max-w-xl font-serif text-2xl font-bold text-[#30251c] sm:text-3xl">
                {jobSimulation.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 font-sans text-sm text-[#765f48]">
                <span>
                  <strong className="text-[#30251c]">Organization:</strong>{" "}
                  {jobSimulation.issuer}
                </span>

                <span>
                  <strong className="text-[#30251c]">Year:</strong>{" "}
                  {jobSimulation.date}
                </span>
              </div>

              <div className="mt-7">
                <a
                  href={jobSimulation.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-sm bg-[#30251c] px-6 py-3 font-sans text-xs font-bold uppercase tracking-widest text-[#f4e7cf] transition hover:-translate-y-1 hover:bg-[#8b4f2c]"
                >
                  View Job Simulation →
                </a>
              </div>

              {/* Signature */}
              <div className="absolute bottom-5 right-7 font-serif text-sm italic text-[#765f48]">
                — Saqib
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-14 text-center">
          <p className="font-serif text-sm italic text-[#765f48]">
            ✦ Learning never really ends.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Certifications;