'use client';
import Nav from '@/components/Navbar';
import React, { useState } from 'react'


// const [text, setText] = useState<string>('');



type Props = {}

const rgb = (props: Props) => {

  const [text, setText] = useState('');

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
    <>
    <Nav/>
    <div className='flex justify-center h-screen flex-col gap-10'>
      <div className='flex justify-center items-center gap-4 '>
        <button className='inline-flex bg-red-500 h-10 w-20 justify-center items-center border-2 border-red-800 hover:bg-red-400' onClick={handleClickR}>red</button>
        <button className='inline-flex bg-green-500 h-10 w-20 justify-center items-center border-2 border-green-800 hover:bg-green-400' onClick={handleClickG}>green</button>
        <button className='inline-flex bg-blue-500 h-10 w-20 justify-center items-center border-2 border-blue-800 hover:bg-blue-400' onClick={handleClickB}>blue</button>
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
          <button className='inline-flex bg-gray-300 h-10 w-20 justify-center items-center border-2 border-gray-400 hover:bg-gray-400' onClick={handleClearText}>Reset</button>
          <button className='inline-flex bg-gray-300 h-10 w-20 justify-center items-center border-2 border-gray-400 hover:bg-gray-400' >Next</button>
      </div>
      <button></button>
    </div>
    </>
  )
}

export default rgb