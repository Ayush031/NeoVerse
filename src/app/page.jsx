"use client"; // Ensure this is at the top if you're using client-side rendering
import { useRouter } from "next/navigation"; // Use 'next/navigation' for Next.js 13+
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  const router = useRouter();

  return (
    <div
      className="pt-3.5 h-screen"
      style={{
        backgroundImage: "url('/images/homeBg2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar />

      <header className="w-full h-[90vh] flex items-center justify-center text-center">
        <div className="flex flex-col gap-10 w-full items-center -mt-20">
          <h2 className="text-8xl font-bold mb-10 text-white/70">
            {["Elevate NeoX with", "GameFi Touch"].map((item, index) => (
              <p key={index} className="mb-2.5">
                {item}
              </p>
            ))}
          </h2>
        </div>
      </header>
      <About />
      <Footer />
    </div>
  );
}
