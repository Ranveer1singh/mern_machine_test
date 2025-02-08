import React, { useEffect, useState } from "react";
import Slider from "../UI/Slider";
const Features = () => {
  const [reviews, setReview] = useState([]);
// console.log("reviews", reviews);

  useEffect(() => {
    fetch("http://localhost:4000/api/review/")
      .then((response) => response.json())
      .then((data) => setReview(data.data))
      .catch((error) => console.log(error));
  }, []);

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
      <div className="card_container w-full  flex justify-center ">
        <div className="slider_container w-2/3 ">
          <Slider data={reviews} />
        </div>
      </div>
    </div>
  );
};

export default Features;
