import HeroSection from "@/Components/Home/HeroSection";
import Navbar from "@/Components/Home/Navbar";
import Link from "next/link";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <HeroSection/>
          <Link href="/Hajj">Go to Hajj Page</Link>
   </div>
  );
}
