import React from 'react'
import './fifth.css'
import Burger1 from '../assets/Burger1.png'
import Bottle from '../assets/Bottle.png'
import Images from '../assets/Images.png'
const FifthComponent = () => {
  return (
    <section>
          <div className="container fifth">
  <div className="row ">
    <div className="col-xxl-3 col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
      <div className='column'>

      </div>
      {/* <img src={Burger1} alt="top Image" className=" Burger1" height={500}/>
      <img src={Bottle} alt="bottom Image" className=" Bottle" height={450} /> */}
    </div>

   
    <div className="col-xxl-6 col-xl-12 col-lg-12 col-md-12 col-sm-12  margin">
        <div className='dt text-center'>
            <span className='bold text-uppercase'>Reservation</span>
            <p className='text-size text-uppercase'>Book Your Table</p>

        </div>
        <div className='row'>
            <div className="col-xxl-6 col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
            <div className="mb-3">
              <input type="text" className="form-control text-uppercase" id="input1" placeholder="Name" />
          </div>

            </div>
            <div className="col-xxl-6 col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="mb-3">
              <input type="text" className="form-control text-uppercase" id="input1" placeholder="Email" />
          </div>

            </div>
        </div>

        <div className='row'>
            <div className="col-xxl-6 col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="mb-3">
              <input type="text" className="form-control text-uppercase" id="input1" placeholder="Date" />
          </div>

            </div>
            <div className="col-xxl-6 col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
            <div className="mb-3">
              <input type="text" className="form-control text-uppercase" id="input1" placeholder="Time" />
          </div>

            </div>
        </div>

        <div className='row'>
            <div className="col-xxl-6 col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="mb-3">
              <input type="text" className="form-control text-uppercases" id="input1" placeholder="People" />
          </div>

            </div>
            <div className="col-xxl-6 col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
            <div className="mb-3">
              <button className="form-control text-uppercase" id="input5">Find a Table</button>
              {/* <input type="text" className="form-control" id="input5" placeholder="Find a Table" /> */}
          </div>

            </div>
        </div>
    </div>

 
    <div className="col-xxl-3 col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
      <div className=' coumn-2'>
     
      {/* <img src={Images} alt="Right Image" className="img-fluid Imagg Right" /> */}
      </div>
    </div>
  </div>
</div>

    </section>
  )
}

export default FifthComponent