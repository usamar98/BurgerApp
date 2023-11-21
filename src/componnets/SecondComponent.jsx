import React from 'react'
import './second.css'
import BurgerImage from '../assets/BurgerImage.png'
import Image1 from '../assets/Image1.png'
import Image2 from '../assets/Image2.png'
const SecondComponent = () => {
  return (
    <>
    <section className='section-2'>
    <div class="container second">
  <div class="row  row-gap">

    <div class=" col-lg-6 col-md-12 col-sm-12 ">
    <div class="card bg-dark text-white ">
            <img src={BurgerImage} alt="Right Image 1" class="card-img img-fluid" />
            <div class="card-img-overlay">
              <h5 class="card-title font-size mb">TRY IT TODAY</h5>
              <p class="card-text font-size-p mb">MOST POPULAR BURGER</p>
            
            </div>
          </div>
    </div>
    

    <div class="col-lg-6 col-md-12 col-sm-12 ">
      <div class="row gap ">
        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div class="card bg-dark text-white card-gap img-wrapper">
            <img src={Image1} alt="Right Image 1" class="card-img img-fluid " />
            <div class="card-img-overlay">
              <h5 class="card-title font-size mb">TRY IT TODAY</h5>
              <p class="card-text font-size-p mb">MORE FUN</p>
              <p class="card-text font-size-p mb">MORE TASTE</p>
            </div>
          </div>
        </div>
        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 mt-3">
          <div class="card bg-dark text-white card-gap-2">
            <img src={Image2} alt="Right Image 2" class="card-img img-fluid Image-2" />
            <div class="card-img-overlay">
              <h5 class="card-title font-size mb">TRY IT TODAY</h5>
              <p class="card-text font-size-p mb">FRES AND CHILLI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    </section>

    </>
    
  )
}

export default SecondComponent