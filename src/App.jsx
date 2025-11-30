import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Divider from './components/Divider'
import { HiExternalLink, HiMail } from 'react-icons/hi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import Logo from './components/Logo'
import hrlLogo from './assets/hrl-logo.png'
import inlLogo from './assets/inl-logo.png'
import nsfLogo from './assets/nsf-logo.jpeg'
import mesaLogo from './assets/mesa-logo.png'
import ExperienceItem from './components/ExperienceItem'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="w-full bg-white">
        <div className="flex items-start justify-between px-4 py-4">
          {/* Name on the left */}
          <div>
            <h1 className="text-black text-xl font-bold">raul razo,</h1>
            <p className="text-gray-500 text-xl">ai researcher</p>
          </div>

          {/* About button on the right */}
          <button className="text-black text-xl font-bold px-4">about</button>
        </div>

        {/* <Divider /> */}
      </header>

      <section className="px-4 pt-7">
        <Logo />
      </section>

      {/* Content section - placeholder for now */}
      <main className="w-full">
        {/* Content will go here later */}
        {/* Bio section */}
        <section className="px-4 pt-7 pb-7">
          <p className="text-black text-base pb-4">
            Generative AI researcher/engineer and lover of all things music.
          </p>

          <p className="text-black text-base">
            Building LLM systems that think, retrieve, and reason.
          </p>
        </section>

        <Divider />

        <section className="">
          <a
            href="mailto:raulrazopro@gmail.com"
            className="flex items-center gap-1 px-4 py-2 text-black text-base font-bold hover:bg-gray-50"
          >
            <div className="flex items-center gap-2">
              <HiMail className="w-5 h-5" />
              <span>raulrazopro@gmail.com</span>
            </div>
            <HiExternalLink className="w-4 h-4" />
          </a>

          <Divider />

          <a
            href="http://linkedin.com/in/raulrazo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-4 py-2 text-black text-base hover:bg-gray-50"
          >
            <div className="flex items-center gap-2">
              <FaLinkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </div>
            <HiExternalLink className="w-4 h-4" />
          </a>

          <Divider />

          <a
            href="http://github.com/raulrazo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-4 py-2 text-black text-base hover:bg-gray-50"
          >
            <div className="flex items-center gap-2">
              <FaGithub className="w-5 h-5" />
              <span>GitHub</span>
            </div>
            <HiExternalLink className="w-4 h-4" />
          </a>

          <Divider />
        </section>

        <section className="px-4 pt-7 pb-7">
          <h2 className="text-black text-4xl font-bold mb-8 text-center">
            experience
          </h2>

          <ExperienceItem
            logo={hrlLogo}
            position="Natural Language Processing Research Engineer Intern"
            company="HRL (Hughes Research Laboratories)"
            duration="September 2025 - Present"
            location="Calabassas, California, United States"
          />

          <ExperienceItem
            logo={inlLogo}
            position="Artificial Intelligence Research Intern"
            company="Idaho National Laboratory"
            duration="July 2025 - September 2025"
            location="Idaho Falls, Idaho, United States"
          />

          <ExperienceItem
            logo={nsfLogo}
            position="Artificial Intelligence Research Fellow"
            company="U.S. National Science Foundation"
            duration="June 2024 - August 2024"
            location="Riverside, California, United States"
          />

          <ExperienceItem
            logo={mesaLogo}
            position="STEM Mentor"
            company="Math Engineering Science Achievement (MESA) Program, UC Riverside"
            duration="June 2023 - September 2025"
            location="Riverside, California, United States"
          />

          <p className="text-black text-base text-center mt-8">
            for more details, please view my resume{' '}
            <button className="text-black font-bold underline hover:text-gray-600">
              here
            </button>
            .
          </p>
        </section>

        <Divider />

        <section className="px-4 pt-7 pb-7">
          <h2 className="text-black text-4xl font-bold mb-8 text-center">
            skills
          </h2>
        </section>

        <Divider />

        <section className="px-4 pt-7 pb-7">
          <h2 className="text-black text-4xl font-bold mb-8 text-center">
            education
          </h2>
        </section>
      </main>
    </div>
  )
}

export default App
