import React from "react";
import Card from "../UI/Card"
import Carousel from "../UI/Carousel";
const Features = () => {
  return (
    <div className="continer w-full h-full mb-10 ">
      <div className="main_title flex justify-center m-10 ">
        <div className="text-center mt-8">
          <h6 className="text-red-400">Quality Features</h6>
          <h1 className="text-[30px] font-semibold">
            Tutorial that people love most
          </h1>
        </div>
      </div>
      <div className="card_container flex justify-center mb-10 w-full">
      <Card/>
      </div>
    </div>
  );
};

export default Features;
