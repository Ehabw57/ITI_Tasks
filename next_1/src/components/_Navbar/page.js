"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function Navbar() {
  const pathname = usePathname()
  const navel = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Login",
      link: "/login",
    },
    {
      name: "books",
      link: "/books",
    }
  ];

  return(
    <>
      <nav>
        {navel.map((item, i) => (
          <Link key={i} className={pathname === item.link ? "active" : ""} href={item.link}>
            {item.name}
          </Link>
        ))}
      </nav>
    </>
  );
}
