import Nav from "@/components/Navbar";
import Image from "next/image";
import Logo from "@/images/Logo_White.png"

export default function Home() {
  return (
    <div className="flex h-screen flex-col">
      <Nav/>
      <div className="flex flex-col justify-center items-center h-full text-white font-bold text-7xl bg-gradient-to-b from-cyan-500 to-blue-500 ">
      <Image src={Logo} alt={"Logo"} className="w-96 m-20"/>
        Three Level Password Security System
      </div>
    </div>
  );
}
