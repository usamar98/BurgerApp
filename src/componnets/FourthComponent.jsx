import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import './forth.css'
import Image4 from '../assets/Image4.png'
const FourthComponent = () => {
  
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  return (

   <>
   <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
        autoplay={{ delay: 500, disableOnInteraction: false }}
      >
     <section>
     
     <SwiperSlide>
   <div className="container four">
  <div className="row  shadow p-4  row-padding">

    <div className="col-xxl-6 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-padding">
      <div className="card ">
        <div className="card-body">
          <h5 className="card-title discover text-uppercase">Discover</h5>
          <p className="card-text Upcoming-Event text-uppercase">Upcoming Event</p>
          <p className="card-text ct">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum fugiat voluptate cum,
            sapiente expedita repudiandae nobis voluptatum illo 
          </p>
        </div>
      </div>
    </div>


    <div className="col-xxl-6 col-xl-12 col-lg-12 col-md-12 col-sm-12 position-relative col-padding">
      <div className="card image-container bg-white shadow">
        <img src={Image4} alt="Image" className="  Image4" />
      </div>
    </div>
  </div>
</div>

</SwiperSlide>
<SwiperSlide>
   <div className="container four">
  <div className="row  shadow  p-4  row-padding">

    <div className="col-xxl-6 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-padding">
      <div className="card ">
        <div className="card-body">
          <h5 className="card-title discover text-uppercase">Discover</h5>
          <p className="card-text Upcoming-Event text-uppercase">Upcoming Event</p>
          <p className="card-text ct">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum fugiat voluptate cum,
            sapiente expedita repudiandae nobis voluptatum illo 
          </p>
        </div>
      </div>
    </div>


    <div className="col-xxl-6 col-xl-12 col-lg-12 col-md-12 col-sm-12 position-relative col-padding">
      <div className="card image-container bg-white shadow">
        <img src={Image4} alt="Image" className="  Image4" />
      </div>
    </div>
  </div>
</div>

</SwiperSlide>
<SwiperSlide>
   <div className="container four">
  <div className="row  shadow  row-padding">

    <div className="col-xxl-6 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-padding">
      <div className="card ">
        <div className="card-body">
          <h5 className="card-title discover text-uppercase">Discover</h5>
          <p className="card-text Upcoming-Event text-uppercase">Upcoming Event</p>
          <p className="card-text ct">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum fugiat voluptate cum,
            sapiente expedita repudiandae nobis voluptatum illo 
          </p>
        </div>
      </div>
    </div>


    <div className="col-xxl-6 col-xl-12 col-lg-12 col-md-12 col-sm-12 position-relative col-padding">
      <div className="card image-container bg-white shadow">
        <img src={Image4} alt="Image" className="  Image4" />
      </div>
    </div>
  </div>
</div>

</SwiperSlide>
   </section>
   </Swiper>
   </>
  )
}

export default FourthComponent