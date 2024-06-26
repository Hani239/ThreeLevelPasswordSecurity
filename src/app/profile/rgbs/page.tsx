'use client';
import Nav from '@/components/Navbar';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'


// const [text, setText] = useState<string>('');



type Props = {}

const rgb = (props: Props) => {

  const [text, setText] = useState('');
  const [error, setError] = useState(false);
  const router = useRouter();
  
  // const [password, setPassword] = useState('');
  const handleRgbS = async () => {
    if (!text) {
      setError(true)
      return false
    }
    else {
      setError(false)
    }
    console.log(text);
    let user_id;
    const rgbData = JSON.parse(localStorage.getItem("securityUser"));
    if (rgbData) {
      user_id = rgbData._id
    }
    let response = await fetch("http://localhost:3000/api/security/rgbs", {
      method: "POST",
      body: JSON.stringify({ text, user_id })
    });
    response = await response.json();
    if(response.success){
      console.log(response);
      const {result} = response
      delete result.password;
      localStorage.setItem("rgbUser",JSON.stringify(result));
      router.push("/profile/rgbs/photopass");
      alert("Password Added Successfully")
    }
    else{
      alert("Password not added")
    }
  }

  const handleClickR = () => {
    setText(prevText => prevText + "R")
  };
  const handleClickG = () => {
    setText(prevText => prevText + "G")
  };
  const handleClickB = () => {
    setText(prevText => prevText + "B")
  };
  const handleClearText = () => {
    setText('');
  };

  return (
    <div className='flex flex-col h-screen bg-gradient-to-b from-cyan-500 to-blue-500'>
      <Nav />
      <div className='flex justify-center items-center h-screen flex-col gap-10 '>
        <div className='flex justify-center items-center gap-4 '>
          <button className='inline-flex bg-red-500 h-10 w-20 justify-center items-center border-2 text-white font-semibold border-red-800 hover:bg-red-400' onClick={handleClickR}>Red</button>
          <button className='inline-flex bg-green-500 h-10 w-20 justify-center items-center border-2 text-white font-semibold border-green-800 hover:bg-green-400' onClick={handleClickG}>Green</button>
          <button className='inline-flex bg-blue-500 h-10 w-20 justify-center items-center border-2 text-white font-semibold border-blue-800 hover:bg-blue-400' onClick={handleClickB}>Blue</button>
        </div>
        <div className='flex justify-center'>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="flex border-2 w-96 p-1"
            placeholder='password'
            readOnly
          >
          </input>
        </div>
        <div className='flex justify-center items-center gap-4'>
          <button className='inline-flex bg-gray-300 h-10 w-20 justify-center items-center border-2 border-gray-400 font-semibold hover:bg-gray-400' onClick={handleClearText}>Reset</button>
          <button className='inline-flex bg-gray-300 h-10 w-20 justify-center items-center border-2 border-gray-400 font-semibold hover:bg-gray-400' onClick={handleRgbS}>Save</button>
        </div>
        <button></button>
      </div>
    </div>
  )
}

export default rgb