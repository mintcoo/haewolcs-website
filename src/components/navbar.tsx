import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  // 현재 나의 페이지 url정보 가져오자
//   const path = usePathname();

  return (
    <nav>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about-us"}>About Us</Link>
        </li>
      </ul>
    </nav>
  );
}