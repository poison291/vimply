import React from "react";
import Navbar from "../Components/Navbar";
import Features from "../Components/Features";
import CompressSection from "../Components/CompressSection";

const Landing = () => {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-teal-100 to-white"> 
      <Navbar />


      <div>
        <CompressSection/>
      </div>
      <div>
        {/* <Features /> */}
      </div>
   

    </div>
     
    
    </>
  );
};

export default Landing;
