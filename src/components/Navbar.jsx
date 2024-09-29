import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const navItems = [
    { title: "Quests", url: "#quests" },
    { title: "Realms", url: "#realms" },
    { title: "Lore", url: "#lore" },
    { title: "Creatures", url: "#creatures" },
  ];

  return (
    <nav className="flex flex-wrap justify-between items-center px-4 py-4 lg:px-40 lg:py-5 bg-purple-900/80 backdrop-blur-sm">
      <Link href="/" className="flex items-center">
        <Image
          src="/images/logo1.png"
          alt="Enchanted Biomes Logo"
          width={200}
          height={100}
          className="w-auto h-8 lg:h-12"
        />
      </Link>
      <div className="hidden md:flex space-x-4 lg:space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.title}
            href={item.url}
            className="text-purple-100 hover:text-purple-300 transition-colors duration-200 text-sm lg:text-base font-medium"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <Button
        className="hidden md:flex bg-purple-400 hover:bg-purple-500 text-purple-900 font-bold py-2 px-4 lg:px-8 rounded-lg transition-colors duration-200 shadow-lg shadow-purple-500/50"
        aria-label="Embark on Adventure"
        onClick={() => router.push("/game")}
      >
        Embark
      </Button>
      <button
        className="md:hidden text-purple-100 hover:text-purple-300 transition-colors duration-200"
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </nav>
  );
}
