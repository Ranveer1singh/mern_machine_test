import React from "react";
import AdvancedCarousel from "../UI/AdvancedCarousel";

const FreeTutorial = () => {
  return (
    <div className="container mt-10">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-10 py-16 ">
        {/* Left Section - Stats Boxes */}
        <AdvancedCarousel />

        {/* Right Section - Text Content */}
        <div className="max-w-lg mt-10 lg:mt-0">
          <h4 className="text-sm font-semibold text-orange-500 uppercase">
            Free Tutorial
          </h4>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            More than thousand of free tutorial upload every weeks
          </h2>
          <p className="text-gray-600 mt-4">
            Get your tests delivered at let home collect sample from the victory
            of the managements that supplies best design system guidelines ever.
            Get your tests delivered at let home collect sample.
          </p>
          <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition">
            Explore details
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreeTutorial;
