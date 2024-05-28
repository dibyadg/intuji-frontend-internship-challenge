import Herobanner from "@/components/Herobanner";
import Navbar from "@/components/Navbar";
import Image from "next/image";


export default function Home() {
  return (
    <div className="bg-gradient-to-r from-[#62BADA] to-[#C9E7F2]">
    <Navbar/>
    <Herobanner/>
    </div>
     );
}
