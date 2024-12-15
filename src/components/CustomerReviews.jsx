import React from 'react'
import './style.css'
function CustomerReviews() {
  return (
    <div>
      <main>
        <swiper-container
          style={{
            "--swiper-navigation-color": "teal",
            "--swiper-pagination-color": "teal",
          }}
          pagination-clickable="true"
          navigation="true"
          effect="cube"
          grab-cursor="true"
          cube-effect-shadow="true"
          cube-effect-slide-shadows="true"
          className="mySwiper"
       
        >
          <swiper-slide>
           {/* <div className='flex flex-cols'>

<div className='  bg-help-box'>
<p className='text-center'>Bhaaskar Lokhande</p>
<p className='text-center'>"</p>
</div>




           </div> */}


<img
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt=""
            />
          </swiper-slide>
          <swiper-slide>
            <img
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt=""
            />
          </swiper-slide>

          <swiper-slide>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaHlgkvSBjLFpLP282EpgmO5qRqRcsCiM_rQ&s"
              alt=""
            />
          </swiper-slide>

          <swiper-slide>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Fqa1zGrADMg4kKba6B2OdEZZ-ZgBYbTw3g&s"
              alt=""
            />
          </swiper-slide>

          <swiper-slide>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNsU8MpTGD5DDjr5w7OfiYQrGmFGUOZEqaCQ&s"
              alt=""
            />
          </swiper-slide>
        </swiper-container>
     
      </main>
     
 
    </div>
  )
}

export default CustomerReviews
