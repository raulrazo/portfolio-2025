import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Divider from './components/Divider'
import { HiExternalLink, HiMail } from 'react-icons/hi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import Logo from './components/Logo'

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
        <section className="px-4 pt-7 pb-10">
          <p className="text-black text-base leading-relaxed">
            I'm a passionate ai researcher with a strong focus on building
            scalable and efficient ai systems. I'm currently working on a
            project that uses ai to help businesses automate their processes.
            I'm also interested in the intersection of ai and psychology, and
            how ai can be used to help people with their mental health.
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
      </main>
    </div>
  )
}

export default App
