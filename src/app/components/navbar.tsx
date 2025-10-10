import Link from "next/link";

const base = "/portfolio";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm flex justify-between items-center py-6 px-8">
      <Link
        href="/"
        className="text-xl font-bold text-headline hover:text-highlight transition"
      >
        Shauna Tuinstra
      </Link>
      <ul className="flex gap-6 text-paragraph font-bold">
        <li><Link href="/projects" className="hover:text-highlight">Projects</Link></li>
        <li><Link href="/contact" className="hover:text-highlight">Contact</Link></li>
      </ul>
    </nav>
  )
}
