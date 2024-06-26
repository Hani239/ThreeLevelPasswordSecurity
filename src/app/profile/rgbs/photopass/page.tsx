"use client"
import Nav from '@/components/Navbar'
import React, { useState } from 'react'
import Image from "next/image";
import Img1 from "@/images/batman.jpg"
import Img2 from "@/images/captainamerica.jpg"
import Img3 from "@/images/deadpool.jpg"
import Img4 from "@/images/greenlantern.jpg"
import Img5 from "@/images/ironman.jpg"
import Img6 from "@/images/shield.jpg"
import Img7 from "@/images/spiderman.jpg"
import Img8 from "@/images/thor.jpg"
import Img9 from "@/images/wolverine.jpg"
import { useRouter } from 'next/navigation';

type Props = {}

const photopass = (props: Props) => {
  const [text, setText] = useState('');
  const [error1, setError1] = useState('');
  const [error, setError] = useState(false);
  const router = useRouter();
  const [isBlurred1, setIsBlurred1] = useState(false);
  const [isBlurred2, setIsBlurred2] = useState(false);
  const [isBlurred3, setIsBlurred3] = useState(false);
  const [isBlurred4, setIsBlurred4] = useState(false);
  const [isBlurred5, setIsBlurred5] = useState(false);
  const [isBlurred6, setIsBlurred6] = useState(false);
  const [isBlurred7, setIsBlurred7] = useState(false);
  const [isBlurred8, setIsBlurred8] = useState(false);
  const [isBlurred9, setIsBlurred9] = useState(false);

  const handlePhotopass = async () => {
    if (!text) {
      setError(true)
      return false
    }
    else {
      setError(false)
    }

    if(text.length===3){
      // alert('Input accepted');
    }
    else{
      handleClearText()
      setError(true)
      alert("Select 3 image")
      return false
    }
    console.log(text);
    let user_id;
    const photopassData = JSON.parse(localStorage.getItem("securityUser")); //user id
    if (photopassData) {
      user_id = photopassData._id
    }
    let response = await fetch("http://localhost:3000/api/security/rgbs/photopass", {
      method: "POST",
      body: JSON.stringify({ text, user_id })
    });
    response = await response.json();
    if(response.success){
      console.log(response);
      const {result} = response
      delete result.password;
      localStorage.setItem("photopassUser",JSON.stringify(result));
      router.push("/profile/rgbs/photopass/final");
      alert("Password Added Successfully")
    }
    else{
      alert("Password not added")
    }
  }

  const handleClick1 = () => {
    setIsBlurred1(!isBlurred1);
    setText(prevText => prevText + "1")
  };
  const handleClick2 = () => {
    setIsBlurred2(!isBlurred2);
    setText(prevText => prevText + "2")
  };
  const handleClick3 = () => {
    setIsBlurred3(!isBlurred3);
    setText(prevText => prevText + "3")
  };
  const handleClick4 = () => {
    setIsBlurred4(!isBlurred4);
    setText(prevText => prevText + "4")
  };
  const handleClick5 = () => {
    setIsBlurred5(!isBlurred5);
    setText(prevText => prevText + "5")
  };
  const handleClick6 = () => {
    setIsBlurred6(!isBlurred6);
    setText(prevText => prevText + "6")
  };
  const handleClick7 = () => {
    setIsBlurred7(!isBlurred7);
    setText(prevText => prevText + "7")
  };
  const handleClick8 = () => {
    setIsBlurred8(!isBlurred8);
    setText(prevText => prevText + "8")
  };
  const handleClick9 = () => {
    setIsBlurred9(!isBlurred9);
    setText(prevText => prevText + "9")
  };
  const handleClearText = () => {
    setText('');
    setIsBlurred1(false);
    setIsBlurred2(false);
    setIsBlurred3(false);
    setIsBlurred4(false);
    setIsBlurred5(false);
    setIsBlurred6(false);
    setIsBlurred7(false);
    setIsBlurred8(false);
    setIsBlurred9(false);
  };
  return (
    <div className='flex flex-col h-screen bg-gradient-to-b from-cyan-500 to-blue-500'>
      <Nav />
      <div className='flex flex-col gap-3 justify-center items-center h-screen'>
        <div className='flex gap-3'>
          <Image src={Img1} alt={'batman'} className={`w-48 ${isBlurred1 ? 'blur-md pointer-events-none' : ''}`} onClick={handleClick1} />
          <Image src={Img2} alt={'captainamerica'} className={`w-48 ${isBlurred2 ? 'blur-md pointer-events-none' : ''}`} onClick={handleClick2} />
          <Image src={Img3} alt={'deadpool'} className={`w-48 ${isBlurred3 ? 'blur-md pointer-events-none' : ''}`} onClick={handleClick3} />
        </div>
        <div className='flex gap-3'>
          <Image src={Img4} alt={'greenlantern'} className={`w-48 ${isBlurred4 ? 'blur-md pointer-events-none' : ''}`} onClick={handleClick4} />
          <Image src={Img5} alt={'ironman'} className={`w-48 ${isBlurred5 ? 'blur-md pointer-events-none' : ''}`} onClick={handleClick5} />
          <Image src={Img6} alt={'shield'} className={`w-48 ${isBlurred6 ? 'blur-md pointer-events-none' : ''}`} onClick={handleClick6} />
        </div>
        <div className='flex gap-3'>
          <Image src={Img7} alt={'spiderman'} className={`w-48 ${isBlurred7 ? 'blur-md pointer-events-none' : ''}`} onClick={handleClick7} />
          <Image src={Img8} alt={'thor'} className={`w-48 ${isBlurred8 ? 'blur-md pointer-events-none' : ''}`} onClick={handleClick8} />
          <Image src={Img9} alt={'wolverine'} className={`w-48 ${isBlurred9 ? 'blur-md pointer-events-none' : ''}`} onClick={handleClick9} />
        </div>
      <div className='flex justify-center'>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            // onChange={handleChange}
            className="flex border-2 w-96 p-1"
            placeholder='password'
            maxLength={3}
            readOnly
          >
          </input>
        </div>
        <div className='flex justify-center items-center gap-4'>
          <button className='inline-flex bg-gray-300 h-10 w-20 justify-center items-center border-2 border-gray-400 font-semibold hover:bg-gray-400' onClick={handleClearText}>Reset</button>
          <button className='inline-flex bg-gray-300 h-10 w-20 justify-center items-center border-2 border-gray-400 font-semibold hover:bg-gray-400' onClick={handlePhotopass}>Next</button>
        </div>
      </div>
    </div>
  )
}

export default photopass