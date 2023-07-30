import Link from 'next/link'
import styles from './Navbar.module.css';

export default function NavBar() {
  return (
    <div className="">
      <div className="flex justify-between p-4">
        <ul className="flex space-x-10 font-mono text-xl text-danger uppercase">
          <li className="hover:text-primary"><Link href="/">home</Link></li>
          <li className="hover:text-primary"><Link href="/about">about</Link></li>
          <li className="hover:text-primary"><Link href="/education">education</Link></li>
          <li className="hover:text-primary"><Link href="/experience">experience</Link></li>
          <li className="hover:text-primary"><Link href="/toptens">my top tens</Link></li>
        </ul>
      </div>
    </div>
  )
}