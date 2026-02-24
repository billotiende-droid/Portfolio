import Link from "next/link";
import HireMeButton from "@/components/HireMeButton";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Me" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  return (
    <nav className="flex flex-wrap items-center gap-4 px-4 py-2 rounded hover:bg-gray-600 transition">
      <ul className="flex flex-wrap gap-4">
        {links.map((link) => (
          <li key={link.href} className="list-none">
            <Link href={link.href} className="no-underline text-white px-2">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="ml-auto">
        <HireMeButton />
      </div>
    </nav>
  );
}
