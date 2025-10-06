import { Upload } from "lucide-react";
import React from "react";
import { useState } from "react";

const CompressSection = () => {
const [file, setfile] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-12 w-11/12 max-w-2xl text-center">
        <h1 className="text-3xl font-bold text-teal-600 mb-4">Upload Your Image</h1>
        <p className="text-gray-700 mb-6">Drag and drop or click to select an image file</p>

        {/* Drag and Drop Box */}
        <div className="border-2 border-dashed border-teal-600 rounded-2xl py-10 flex flex-col items-center justify-center cursor-pointer hover:bg-teal-50 hover:shadow-lg ">
          <div className="bg-teal-100 p-6 rounded-full mb-4">
            <Upload className="w-16 h-16 text-teal-500" />
          </div>
          <h1 className="font-semibold text-lg">Click to upload or drag and drop</h1>
          <p className="text-gray-500 mt-2 text-sm">PNG, JPG, GIF, WebP up to 10MB</p>
        </div>
      </div>
    </div>
  );
};

export default CompressSection;
