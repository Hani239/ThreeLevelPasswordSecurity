"use client"
import React, { useState } from 'react';

const FileUploadAndLock: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isLocked, setIsLocked] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSave = () => {
    if (file) {
      // Implement your save logic here
      console.log('File saved:', file.name);
      setIsLocked(true);
    }
  };

  const handleReset = () => {
    setFile(null);
    setIsLocked(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border border-gray-300 rounded bg-white">
      <input
        type="file"
        onChange={handleFileChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        disabled={isLocked}
      />
      <button
        onClick={handleSave}
        className={`w-full px-4 py-2 mb-4 text-white rounded ${isLocked ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500'}`}
        disabled={isLocked}
      >
        {isLocked ? 'File Locked' : 'Save File'}
      </button>
      {/* <button
        onClick={handleReset}
        className="w-full px-4 py-2 text-white bg-red-500 rounded"
      >
        Reset
      </button> */}
      {file && (
        <div className="mt-4">
          <p><strong>Selected File:</strong> {file.name}</p>
        </div>
      )}
    </div>
  );
};

export default FileUploadAndLock;
