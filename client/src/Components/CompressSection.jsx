import { Slider } from "@mui/material";
import { SlidersHorizontal, Upload } from "lucide-react";
import React, { useEffect, useState } from "react";

const CompressSection = () => {
  const [file, setfile] = useState(null);
  const [previewUrl, setpreviewUrl] = useState(null);
  const [quality, setquality] = useState(80);
  const [width, setWidth] = useState(null);
  const[height, setHeight] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setfile(selectedFile);
    } else {
      alert("Please Select Valid Image Format Only");
    }
  };

  useEffect(() => {
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    setpreviewUrl(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

console.log(`Quality: ${quality}`)
console.log(`Height: ${height}`)
console.log(`Width: ${width}`)

  return (
    <div className="min-h-screen bg-gradient-to-br  from-teal-50 to-white flex flex-col md:flex-row items-start justify-center p-4 gap-4">
      
      {/* Left Panel */}
     <div className="flex-1 max-w-md flex flex-col items-center space-y-4">
  {/* Upload Box */}
  <div className="bg-white rounded-xl shadow-lg p-6 w-full text-center">
    <h1 className="text-2xl font-bold text-teal-600 mb-2">Upload Your Image</h1>
    <p className="text-gray-600 text-sm mb-4">
      Drag and drop or click to select an image file
    </p>
    <input
      type="file"
      accept=".png, .jpg, .jpeg, .webp"
      id="fileInput"
      className="hidden"
      onChange={handleFileChange}
    />
    <label htmlFor="fileInput" className="cursor-pointer block">
      <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 hover:border-teal-500 hover:bg-teal-50 transition">
        <div className="flex justify-center mb-2">
          <div className="bg-teal-100 p-4 rounded-full">
            <Upload className="w-12 h-12 text-teal-500" />
          </div>
        </div>
        <h2 className="font-semibold text-lg mb-1">Click to upload or drag and drop</h2>
        <p className="text-gray-500 text-sm">PNG, JPG, GIF, WebP up to 10MB</p>
      </div>
    </label>
  </div>

  {/* Preview Section (Separate Box) */}
  {previewUrl && (
    <div className="bg-white rounded-xl shadow-lg p-4 w-full text-center">
      <h3 className="text-lg font-semibold text-teal-600 mb-3">Preview</h3>
      <img
        src={previewUrl}
        alt="Preview"
        className="mx-auto max-h-64 rounded-lg shadow object-contain"
      />
    </div>
  )}
</div>

      {/* Right Panel */}
      <div className="flex-1 max-w-md bg-white rounded-xl shadow-lg p-4 space-y-4">
        {/* Header */}
        <div className="flex items-center space-x-2 mb-4">
          <SlidersHorizontal size={22} className="text-teal-600" />
          <h2 className="text-xl font-semibold text-teal-600">Compression Setting</h2>
        </div>

        {/* Quality Slider */}
        <div>
          <label className="block font-semibold mb-1">Quality: {quality}%</label>
          <Slider
            size="medium"
            value={quality}
            step={5}
            min={0}
            max={100}
            valueLabelDisplay="auto"
            onChange={(e, newValue) => setquality(newValue)}
            sx={{
              color: "#14b8a6",
              "& .MuiSlider-thumb": {
                backgroundColor: "#14b8a6",
              },
              "& .MuiSlider-track": {
                backgroundColor: "#14b8a6",
              },
              "& .MuiSlider-rail": {
                backgroundColor: "#d1d5db",
              },
            }}
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1 px-2">
            <span>Lower</span>
            <span>Higher</span>
          </div>
        </div>

        {/* Max Width & Height Inputs */}
        <div className="space-y-4 mt-4">
          <div className="flex items-center justify-between">
            <label className="font-semibold text-sm text-gray-700">Max Width (px)</label>
            <input
              type="number"
              value={width || ""}
              onChange={(e) => setWidth(Number(e.target.value) || null)}
              placeholder="Auto"
              className="w-20 p-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-teal-500 transition"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="font-semibold text-sm text-gray-700">Max Height (px)</label>
            <input
              type="number"
              value={height || ""}
              onChange={(e) => setHeight(Number(e.target.value) || null)}
              placeholder="Auto"
              className="w-20 p-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-teal-500 transition"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompressSection;