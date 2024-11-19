import Link from "next/link";

export default function CountryList() {
    return (
    <div>
      <h1 className="text-center m-5 text-5xl">country list page</h1>
      <ul className="">
        <li>
        <Link href="/country/pakistan">Pakistan</Link>
        </li>

        <li>
        <Link href="/country/india">India</Link>
        </li>

        <li>
        <Link href="/country/china">china</Link>
        </li>

        <li>
        <Link href="/country/brazil">Brazil</Link>
        </li>

        <li>
        <Link href="/country/indonesia">Indonasia</Link>
        </li>
        
      </ul>
    </div>
    );
  }