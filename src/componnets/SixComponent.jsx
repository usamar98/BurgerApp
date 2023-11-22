import React from 'react'
import './six.css'
import logo from '../assets/Logo2.png'
import { FaFireFlameSimple ,FaBusinessTime ,FaFacebookF ,FaTwitter,FaInstagram ,FaWhatsapp} from "react-icons/fa6";
const Sixcomponent = () => {
  return (
    <>
    <section className='section-6'>

    <div className="container six six-content">
  <div className="row  ">
    <div className="col-md-5 mx-md-auto pt-3">
      <div className="custom-card">
        <div className="card-body mb-5">
          <img src={logo} alt="Company Logo" className="img-fluid companylogo" />
          <p className='p-text text-light mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, consectetur. Sit, nesciunt! Unde, provident iste enim sapiente eveniet quisquam. Esse tempora quos pariatur est numquam debitis? Dolorem cumque quae vitae!</p>
        </div>
      </div>
    </div>

    <div className="col-md-5 mb-3 mt-auto">
      <div className="custom-card text-center">
        <div className="card-body">
          <div className="infor text-start addres">
            <p className='text-light'><FaFireFlameSimple />MAIN ROAD, BUILDING NAME, COUNTRY</p>
            <p className='text-light'><FaBusinessTime />INFO@COMPANY.COM</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="row px-3 ">
    <div className="col-md-5 mx-md-auto ">
      <div className="custom-card">
        <div className="card-body">
          <div className="info text-light">
            @COMPANY all reserved ......
          </div>
        </div>
      </div>
    </div>

    <div className="col-md-5 ms-xs-0">
      <div className="custom-card">
        <div className="card-body">
          <div className="infor text-end text-light space">
            <ul>
              <li> <FaFacebookF className=' rounded-circle back ' size={20} /></li>
              <li><FaTwitter className=' rounded-circle back'/></li>
              <li><FaInstagram className=' rounded-circle back'/></li>
              <li> <FaWhatsapp className=' rounded-circle back'/></li>
            </ul>
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

export default Sixcomponent