import React from 'react'

function GroupBrands() {
  const img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGuzHREzvIcoXcbxN6cMuv2k0mEHPHISXfg&s";
  const imgArray = new Array(7).fill(img);
  return (
    <div className="flex sm:px-5 md:px-10 px-14 py-8">
  <div className="container mx-auto max-w-6xl my-2">
    <p className="font-bold text-help-head text-lg sm:text-center">
      Group Brands
    </p>
      {/* <marquee behavior="scroll" direction="left" > */}
      <div className="flex flex-cols justify-center">
      <div className="grid container  mx-auto max-w-6xl grid-cols-2 my-8 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {imgArray.map((array, index) => (
          <div
            key={index}
            className="w-32 h-16 pb-8  bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${array})`,
            }}
          ></div>
        ))}
      </div>
          </div>
          {/* </marquee> */}
       
       </div>
         
       </div>
  )
}

export default GroupBrands
