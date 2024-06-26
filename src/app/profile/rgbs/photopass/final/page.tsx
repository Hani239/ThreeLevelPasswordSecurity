import FileUploadAndLock from '@/components/FileUploadAndLock'
import Navbar from '@/components/Navbar'
import React from 'react'

type Props = {}

const final = (props: Props) => {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-cyan-500 to-blue-500 ">
    <Navbar />
    <main className="flex-grow flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">Three Level Password Security System</h1>
        <FileUploadAndLock />
      </div>
    </main>
  </div>
  )
}

export default final