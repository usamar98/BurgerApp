import React, { useState, useEffect } from 'react';
import './forth.css'
import Image4 from '../assets/Image4.png';

const FourthComponent = () => {
  
  

  return (
    <>
    <section className='section4 four '>
    <div  className="container shadow my-5 ">
      <div className="row px-3 py-3 event">
        <div className="col-lg-6 my-lg-0 my-3 col-xs-12  pe-5 position-relative">
          <h3 className="discover text-uppercase">discover</h3>
          <h1 className="Upcoming-Event text-uppercase">upcoming events</h1>
          <p className="ct">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa facilis pariatur ex harum ipsa illum soluta, tenetur porro minus similique deserunt minima eligendi consectetur. Architecto quia magnam assumenda a provident!
          </p>
          <div className="buttons d-flex position-absolute bottom-0 gap-2 mt-lg-0">
          <span class="p-2  rounded-circle "></span>
          <span class="p-2   rounded-circle active"></span>
          <span class="p-2  rounded-circle "></span>
          </div>
        </div>
        <div className="col-lg-6 my-lg-0 my-3 col-xs-12  position-relative d-flex overflow-hidden burger-img">
        <img class="w-100  " src={Image4} alt=""/>
        <img class="w-100 active-img position-absolute top-0 start-0" src={Image4} alt=""/>
        <img class="w-100  position-absolute top-0 start-0" src={Image4} alt=""/> 
        </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default FourthComponent;
