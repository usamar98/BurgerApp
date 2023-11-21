import React from 'react'
import './third.css'
import Burger from '../assets/Burger.png'
import Burger3 from '../assets/Burger3.png'
import Burger2 from '../assets/Burger2.png'
const ThirdComponent = () => {
  return (
    <>
    <section className='section3'> 
<div className="container third">
<div className='text-center '>
        <span className=' text-uppercase text-1 text-dark'>Always Taste burger</span>
        <h1 className='heading mt-4 text-uppercase heading'>Choose and Enjoye</h1>
        <p className='first-paragrapah mt-4 p'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ab, quasi dignissimos modi laboriosam,  omnis architecto quisquam doloremque temporibus esse amet eligendi. Hic enim doloremque quidem!</p>
        </div>
  <div className="row">
    {/* Column 1 */}
    <div className="col-xxl-4 col-xl-12 col-lg-12 col-md-12 col-sm-12 mt-5">
      <div className="card text-center">
        <img src={Burger} alt="Description 1" className="card-img-top img-fluid" />
        <div className="card-body">
          <p className="card-text text-uppercase head">Lorem Ipsum Dolor</p>
          <p className='text-uppercase p'>Lorem, ipsum dolor sit amet consectetur adipisicing elit, esse quod</p>
          <div className='a'>
          <a href="" className='text-uppercase btn'>Order Now</a>
         </div>
        </div>
      </div>
    </div>

    {/* Column 2 */}
    <div className="col-xxl-4 col-xl-12 col-lg-12 col-md-12 col-sm-12 mt-5">
      <div className="card text-center card-width">
        <img src={Burger} alt="Description 2" className="card-img-top img-fluid " />
        <div className="card-body ">
          <p className="card-text text-alignment text-uppercase head">Lorem Ipsum Dolor</p>
          <p className='text-uppercase p'>Lorem, ipsum dolor sit amet consectetur adipisicing elit, esse quod</p>
          <div className='a'>
          <a href="" className='text-uppercase btn'>Order Now</a>
         </div>
        </div>
      </div>
    </div>

    {/* Column 3 */}
    <div className="col-xxl-4 col-xl-12 col-lg-12 col-md-12 col-sm-12 mt-5">
      <div className="card text-center card-width">
        <img src={Burger} alt="Description 2" className="card-img-top img-fluid " />
        <div className="card-body ">
          <p className="card-text text-alignment text-uppercase head">Lorem Ipsum Dolor</p>
          <p className='text-uppercase p'>Lorem, ipsum dolor sit amet consectetur adipisicing elit, esse quod</p>
          <div className='a'>
          <a href="" className='text-uppercase btn'>Order Now</a>
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

export default ThirdComponent