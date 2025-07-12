import logoImg from "@/assets/logo.svg";
import MenuIcon from "@/Icons/MenuIcon";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href={"/"}>
            <Image src={logoImg} alt="Nav Logo" className="h-12" />
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href={"/get-started"}
            className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            Get started
          </Link>
        </nav>

        <button className="md:hidden" aria-label="Toggle menu">
          <MenuIcon />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
