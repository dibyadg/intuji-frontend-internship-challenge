import Companies from "@/components/Companies";
import Features from "@/components/Features";
import Herobanner from "@/components/Herobanner";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import Whyus from "@/components/Whyus";
import Image from "next/image";


export default function Home() {
  return (
    <>
    <div className="bg-gradient-to-r from-[#62BADA] to-[#C9E7F2]">
    <Navbar/>
    <Herobanner/>
    </div>
    <Companies/>
    <Whyus/>
    <Features/>
    <Testimonials/>
    </>
     );
}
