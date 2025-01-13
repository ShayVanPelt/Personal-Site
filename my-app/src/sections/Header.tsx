import Link from 'next/link'


export const Header = () => {
  return (
  <div className="flex justify-center items-center fixed top-3 w-full">
    <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <Link href="#home" className="nav-item">
          Home
        </Link>
        <Link href="#experience" className="nav-item">
          Experience
        </Link>
        <Link href="#projects" className="nav-item">
          Projects
        </Link>
        <Link href="#contact" className="nav-item bg-white text-blue-900 hover:bg-white/65 hover:text-blue-900">
          Contact
        </Link>
    </nav>
  </div>
  )
};
