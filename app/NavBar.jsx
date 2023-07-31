import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="l-1/2 pl-11 sticky top-0 h-10">
      <div className="flex justify-between p-4">
        <ul className="flex space-x-10 font-mono text-x">
          <li><Link className='text-danger uppercase hover:text-primary active:text-primary' href="#"  >home</Link></li>
          <li><Link className="text-danger uppercase hover:text-primary active:text-primary" href="#about">about</Link></li>
          <li><Link className="text-danger uppercase hover:text-primary active:text-primary" href="#education">education</Link></li>
          <li><Link className="text-danger uppercase hover:text-primary active:text-primary" href="#projects">projects</Link></li>
        </ul>
      </div>
    </nav>
  )
}