import React, { useState } from 'react';
import { Upload } from 'lucide-react';

const IdentityVerification: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setStatus('Uploading...');
      // Simulated upload process
      setTimeout(() => {
        setStatus('Verification in progress...');
        setTimeout(() => {
          setStatus('Verified');
        }, 2000);
      }, 1500);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Identity Verification</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="id-upload" className="block text-sm font-medium text-gray-700 mb-2">
            Upload your ID or Student Card
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="id-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                >
                  <span>Upload a file</span>
                  <input id="id-upload" name="id-upload" type="file" className="sr-only" onChange={handleFileChange} />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
        {file && (
          <div className="mt-4">
            <p className="font-semibold">File: {file.name}</p>
            <p className="text-sm text-gray-500">Status: {status}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default IdentityVerification;