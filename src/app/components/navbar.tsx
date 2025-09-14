export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 px-8 bg-background">
      <span className="text-xl font-bold text-headline">Shauna Tuinstra</span>
      <ul className="flex gap-6 text-paragraph font-bold">
        <li><a href="#projects" className="hover:text-highlight">Projects</a></li>
        <li><a href="#about" className="hover:text-highlight">About</a></li>
        <li><a href="#contact" className="hover:text-highlight">Contact</a></li>
      </ul>
    </nav>
  )
}
