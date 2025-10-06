import { Cpu, Eye, Images, Infinity, Layers, Zap } from "lucide-react";
import React from "react";
import { useEffect } from "react";

const Features = () => {
  const features = [
    {
      icon: <Cpu />,
      title: "Fast Compression",
      description:
        "Compress images instantly in your browser without losing quality.",
    },
    {
      icon: <Layers />,
      title: "Resize & Crop",
      description:
        "Set custom width and height, or crop images precisely to fit your needs",
    },
    {
      icon: <Infinity />,
      title: "Unlimited Usage",
      description:
        "No account required — compress as many images as you want, anytime.",
    },
    {
      icon: <Images />,
      title: "Multiple Formats",
      description:
        "Supports JPEG, PNG, WebP, and GIF so you can work with all image types.",
    },
    {
      icon: <Eye />,
      title: "Preview Before Download",
      description:
        "See the compressed result before saving to ensure perfect quality.",
    },
    {
      icon: <Zap />,
      title: "Lightning Fast Algorithm",
      description:
        "Optimized engine for the quickest compression possible, saving you time.",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-teal-100 to-white">
        <div className="max-w-4xl mx-auto text-center px-6 py-14 md:py-20 select-none">
          <h1 className="text-4xl md:text-6xl font-bold text-teal-600 mb-6 tracking-tight">
            What Vimply Can Do
          </h1>

          <p className="mt-5 text-lg md:text-xl text-gray-700 font-medium max-w-3xl mx-auto leading-relaxed">
            Transform your images instantly. All features are{" "}
            <span className="text-teal-500 font-bold">Free</span>,{" "}
            <span className="text-teal-500 font-bold">Unlimited</span>, and easy to
            use.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 pb-20">
          {features.map((item, index) => (
            <div
              className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center
             hover:shadow-2xl hover:scale-110 transition-all duration-300 ease-in-out"
              key={index}
            >
              <div className="bg-teal-200 p-3 rounded-xl text-teal-500">
                {item.icon}
              </div>
              <div className="">
                <h1 className="text-xl font-semibold text-teal-600">
                  {item.title}
                </h1>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Features;