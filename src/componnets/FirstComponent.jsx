import React from 'react'
import './first.css'
import Logo from '../assets/Logo.png'
import VectorSmartObject from '../assets/VectorSmartObject.png'
import Capture from '../assets/Image.png'
const FirstComponent = () => {
  return (
    <>
    <section className='section1'>
    <div className="container  first">
  <div className="row pt-5 ">

    <div className=" col-6 ">
      <img src={Logo} alt="Left Logo" class="img-fluid" className='Logo' height={60}/>
    </div>
    
  
    <div className=" col-6  Vector_Smart_Object">
        <div className='text-end'>
        <img src={VectorSmartObject} alt="Right Logo" class="img-fluid"/> <span className='txt-1'>Express Deliver +123456789</span>
        </div>
        </div>
        <div className="col-6 ms-auto">
        <nav class="navbar navbar-expand-lg navbar-light ">
    <button class="navbar-toggler mt-md-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto"> 
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">MENU</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">SHOP</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">CONTACT </a>
        </li>
      </ul>
    </div>
  </nav>

        </div>


      </div>


  <div className="row d-flex justify-content-center align-items-center justify">
  <div className="col-md-6 col-xs-12 col-xl-12-12 burger">
    <div className=''>
    <h4 class="d-inline-block pt-2 mt-4 pb-1 px-lg-3 px-md-3 px-2">it is a good time for a great taste of burgers</h4>
    <span className="display-4">BURGER</span><br/>
    <span className="display-6 text-start">WEEK</span>
    </div>
</div>

    <div className="col-md-6 d-flex justify-content-center  col-xs-12  col-xl-12-12">
      <img src={Capture} alt="" className="Capture" />
    </div>
  </div>
  </div>

        </section>


    </>
    
  )
}

export default FirstComponent