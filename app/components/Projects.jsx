import Image from 'next/image'
import videoGame from 'public/videoGame.png'
import website from 'public/website.png'
import COMPSA from 'public/COMPSA.png'

export default function Projects() {
  return (
    <div className=" flex flex-col h-screen">
      <div className="flex flex-col justify-center h-screen">
        <h1 className="text-6xl font-sans font-bold uppercase text-white">Projects</h1>
        <p className=" font-mono text-lg text-gray pt-10 pb-10">Here, you'll find a compilation of both personal and school projects that reflect my journey in honing development skills. From practical coding solutions to academic endeavors, these projects embody my commitment to continuous learning and practical application in the world of software development.</p>

        {/* grid display of projects */}
        <div className="grid grid-cols-3 gap-4 pr-6">
          <div className="p-5 bg-white bg-opacity-50 rounded-lg flex-1 text-center transition-transform transform hover:scale-105">
            <div className='flex justify-center rounded-lg overflow-hidden pb-10 '>
              <Image src={videoGame} alt="picture of website" className="rounded-lg w-64 md:w-96" />
            </div>
            <h2 className="text-2xl font-mono font-bold text-gray uppercase">The pentagram</h2>
            <p className="font-mono text-danger">I created and idealized the art assets for my second year Video Game Design course's final project.</p>
          </div>

          <div className="p-5 bg-white bg-opacity-50 rounded-lg flex-1 text-center transition-transform transform hover:scale-105">
            <div className='flex justify-center rounded-lg overflow-hidden pb-10'>
              <Image src={website} alt="picture of website" className="rounded-lg w-64 md:w-96" />
            </div>
            <h2 className="text-2xl font-mono font-bold text-gray uppercase">Portfolio Website</h2>
            <p className="font-mono text-danger">Leveraging Next.js and Tailwind I built this portfolio website to showcase my skills and experience beyond my resume.</p>
          </div>

          <div className="p-5 bg-white bg-opacity-50 rounded-lg flex-1 text-center transition-transform transform hover:scale-105">
          <div className='flex justify-center rounded-lg overflow-hidden'>
              <Image src={COMPSA} alt="picture of website" className="rounded-lg w-64 md:w-96 pb-10" />
            </div>
            <h2 className="text-2xl font-mono font-bold text-gray uppercase">Admin Panel</h2>
            <p className="font-mono text-danger">As part of my role as a full stack developer on COMPSA, me and another team member created an admin panel leveraging Next.js and Bulma.</p>
          </div>

        </div>

      </div>
    </div>
  )
} 