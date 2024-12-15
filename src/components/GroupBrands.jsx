import React from 'react'

function GroupBrands() {
  return (
     <div className="flex ">
       <div>
      <p className='font-bold text-help-head text-lg'>Group Brands</p>
   
      <marquee behavior="scroll" direction="left" >
      <div className="flex flex-cols w-screen h-20 ">
          <img src="src\assets\pb_business_logo (1).svg" />
          <img src="src\assets\pb_business_logo (1).svg" />
          <img src="src\assets\pb_business_logo (1).svg" />
          <img src="src\assets\pb_business_logo (1).svg" />
          <img src="src\assets\pb_business_logo (1).svg" />
          <img src="src\assets\pb_business_logo (1).svg" />
          <img src="src\assets\pb_business_logo (1).svg" />
          <img src="src\assets\pb_business_logo (1).svg" />
          </div></marquee>
       
       </div>
         
       </div>
  )
}

export default GroupBrands
