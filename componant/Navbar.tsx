import Link from "next/link";

export default function Navbar() {
    return (
      <ul className="navbar">
        <li>
            <Link href="/">Home</Link>
        </li>

        <li>
            <Link href="/about">About</Link>
        </li>

        <li>
            <Link href="/country_list">Country</Link>
        </li>
      </ul>
    );
  }