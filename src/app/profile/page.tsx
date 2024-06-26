'use client'
import Nav from "@/components/Navbar";
import Log from "@/components/Login";
import Reg from "@/components/Register"
import { useState } from "react";

export default function Login() {
  const [login, setLogin] = useState(true)
  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-cyan-500 to-blue-500">
      <Nav />
      <div className="flex space-y-5 m-5 flex-col justify-center items-center h-screen">
        {
          login ? <Log /> : <Reg />
        }

        <button className='border-0 cursor-pointer text-red-500 rounded ml-5' onClick={() => setLogin(!login)}>
          {login ? "Don't have account? SignUp" : "Already have account? Login"}
        </button>
      </div>
    </div>
  );
}
