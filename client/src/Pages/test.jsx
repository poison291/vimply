import { Upload, X, FileImage } from "lucide-react";
import React, { useState } from "react";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const removeFile = () => {
    setSelectedFile(null);
    setPreview(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 to-white flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-teal-600 mb-2 text-center">
          Upload Your Image
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Drag and drop or click to select an image file
        </p>

        {!selectedFile ? (
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all duration-300 ${
              isDragging
                ? "border-teal-500 bg-teal-50 scale-105"
                : "border-gray-300 hover:border-teal-400 hover:bg-teal-50"
            }`}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              id="fileInput"
            />
            <label htmlFor="fileInput" className="cursor-pointer">
              <div className="flex flex-col items-center">
                <div className="bg-teal-100 p-4 rounded-full mb-4">
                  <Upload className="w-12 h-12 text-teal-600" />
                </div>
                <p className="text-lg font-semibold text-gray-700 mb-2">
                  Click to upload or drag and drop
                </p>
                <p className="text-sm text-gray-500">
                  PNG, JPG, GIF, WebP up to 10MB
                </p>
              </div>
            </label>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="relative bg-gray-50 rounded-xl p-4">
              <button
                onClick={removeFile}
                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              
              {preview && (
                <div className="mb-4">
                  <img
                    src={preview}
                    alt="Preview"
                    className="max-h-64 mx-auto rounded-lg"
                  />
                </div>
              )}

              <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
                <FileImage className="w-8 h-8 text-teal-600" />
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">
                    {selectedFile.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
            </div>

            <button className="w-full bg-teal-600 text-white py-3 rounded-xl font-semibold hover:bg-teal-700 transition-colors">
              Compress Image
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;