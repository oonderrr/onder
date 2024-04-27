import logo from "/src/app/fylo-dark-theme-landing-page/ui/images/logo.svg";
import Link from "next/link";
import Image from "next/image";
import { raleway } from "@/src/fonts/fonts";

function Header() {
  return (
    <>
      <div
        className={`flex items-center justify-between w-full h-32 px-7 md:px-20 ${raleway.className}`}
      >
        <div>
          <Image
            src={logo}
            alt="logo"
            height={45}
          />
        </div>
        <div className="flex gap-6 text-sm [&>*]:opacity-70 hover:[&>*]:opacity-100">
          <Link href="#">Features</Link>
          <Link href="#">Team</Link>
          <Link href="#">Sign In</Link>
        </div>
      </div>
    </>
  );
}

export default Header;
