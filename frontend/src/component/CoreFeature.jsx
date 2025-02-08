import React from 'react'

const CoreFeature = () => {
  return (
    <div className="container mt-10">
 <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-10 py-16 bg-gray-50 ">
      {/* Left Section - Stats Boxes */}
      <div className="grid grid-cols-1 gap-4 grid-rows-5   ">
        <div className="bg-white shadow-md  flex flex-col  hover:border-slate-300 hover:shadow-lg rounded justify-center items-center text-center p-4 text-orange-500 text-2xl font-bold 
          col-start-1 row-start-2 row-span-2" style={{
            height : "250px",
            width : "300px"
          }}>
          <h2 className='text-[40px]'>80K+</h2>
          <p className="text-gray-600 text-[15px] font-normal ">We have more than students</p>
        </div>
        <div className="bg-white shadow-md  flex flex-col hover:border-slate-300 hover:shadow-lg rounded justify-center items-center text-center p-4 text-red-500 text-2xl font-bold 
          col-start-1 row-start-4 row-span-2">
          <h2  className='text-[40px]' >150+</h2>
          <p className="text-gray-600 text-[15px] font-normal ">Free online tutorials videos available</p>
        </div>
        <div className="bg-white shadow-md  flex flex-col hover:border-slate-300 hover:shadow-lg rounded justify-center items-center text-center p-4 text-pink-500 text-2xl font-bold 
          col-start-2 row-start-1 row-span-2">
          <h2  className='text-[40px]'>90+</h2>
          <p className="text-gray-600 text-[15px] font-normal ">Daily updated blog post maintain</p>
        </div>
        <div className="bg-white shadow-md  flex flex-col hover:border-slate-300 hover:shadow-lg rounded justify-center items-center text-center p-4 text-purple-500 text-2xl font-bold 
          col-start-2 row-start-3 row-span-2">
          <h2  className='text-[40px]'>& 3M</h2>
          <p className="text-gray-600 text-[15px] font-normal ">Job posted everydays with qualification</p>
        </div>
      </div>


      {/* Right Section - Text Content */}
      <div className="max-w-lg mt-10 lg:mt-0">
        <h4 className="text-sm font-semibold text-orange-500 uppercase">Core Features</h4>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">
          Smart Jackpots that you may love this anytime & anywhere
        </h2>
        <p className="text-gray-600 mt-4">
          Get your tests delivered at let home collect sample from the victory of the
          managements that supplies best design system guidelines ever. Get your tests
          delivered at let home collect sample.
        </p>
        <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition">
          Explore details
        </button>
      </div>
    </div>
    </div>
  )
}

export default CoreFeature