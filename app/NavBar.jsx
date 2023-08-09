import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="l-1/2 pl-11 sticky top-0 h-10">
      <div className="flex justify-between p-4">
        <ul className="flex space-x-10 font-mono text-x">
          <li><Link className='text-gray uppercase hover:text-white active:text-white' href="#"  >home</Link></li>
          <li><Link className="text-gray uppercase hover:text-white active:text-white" href="#about">about</Link></li>
          <li><Link className="text-gray uppercase hover:text-white active:text-white" href="#education">education</Link></li>
          <li><Link className="text-gray uppercase hover:text-white active:text-white" href="#experience">experience</Link></li>
          <li><Link className="text-gray uppercase hover:text-white active:text-white" href="#projects">projects</Link></li>
        </ul>
      </div>
    </nav>
  )
}