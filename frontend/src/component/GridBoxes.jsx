import React from 'react'

const GridBoxes = () => {
  return (
    <div class="parent">
    <div className="div1 w-60 h-36 flex flex-col justify-center items-center bg-white shadow-lg rounded-2xl">
          <h2 className="text-4xl font-bold text-orange-500">80K+</h2>
          <p className="text-gray-600 text-center">We have more than students</p>
        </div>
        <div className="div2 w-60 h-36 flex flex-col justify-center items-center bg-white shadow-lg rounded-2xl">
          <h2 className="text-4xl font-bold text-red-500">150+</h2>
          <p className="text-gray-600 text-center">Free online tutorials videos available</p>
        </div>
        <div className="div3 w-60 h-36 flex flex-col justify-center items-center bg-white shadow-lg rounded-2xl">
          <h2 className="text-4xl font-bold text-pink-500">90+</h2>
          <p className="text-gray-600 text-center">Daily updated blog post maintain</p>
        </div>
        <div className="div4 w-60 h-36 flex flex-col justify-center items-center bg-white shadow-lg rounded-2xl">
          <h2 className="text-4xl font-bold text-purple-500">& 3M</h2>
          <p className="text-gray-600 text-center">Job posted everydays with qualification</p>
        </div>
</div>
  )
}

export default GridBoxes