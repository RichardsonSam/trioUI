import React from 'react'
import './App.css'
import Image1 from './assets/image1.svg'
import Image2 from './assets/image2.png'
import Image3 from './assets/image3.png'
import Image4 from './assets/image4.svg'
import Image5 from './assets/image5.svg'
import Image6 from './assets/image6.svg'
import Image7 from './assets/image7.svg'
import Image8 from './assets/image8.png'
const App = () => {
  return (
    <>
      <div>
        <div className='container'>
          <img src={Image1} alt="" />
        </div>
      </div>

      <div>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-4'>
              <p className='mt-3'><i class="fa-solid fa-magnifying-glass"></i> Search here</p>
            </div>
            <div className='col-lg-4'>
              <img src={Image2} alt="" />
            </div>
            <div className='col-lg-4 mt-4'>
              <button className='button-subscribe'>SUBSCRIBE</button>
              <button className='button-sign ms-4'> SIGN IN</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='row'>


          <div className='col-lg-2'>
            <i class="fa-solid fa-bars"></i>
          </div>
          <div className='col-lg-7'>
            <ul className='list d-flex '>
              <li className='ms-4'><a href="home">home</a></li>
              <li className='ms-4'> <a href="cat">categories</a></li>
              <li className='ms-4'><a href="">IR Prime</a></li>
              <li className='ms-4'><a href="">Events</a></li>
              <li className='ms-4'><a href="">BookStore</a></li>
              <li className='ms-4'><a href="">Video</a></li>
            </ul>
          </div>
          <div className='col-lg-2'>
            <p><i class="fa-solid fa-cloud-bolt"></i> Friday,30 June 2023</p>
          </div>
        </div>
      </div>
      <div className='titles'>
        <p>Fashion & Lifestyle * Beauty & Wellness * Food & Beverage * customer Durable & IT * Entertainment * Home Decor & furnishing </p>
      </div>
      <div className='container-fluid'>
        <div className='container'>
          <div className="row">
            <div className="col-lg-4 d-flex">
              <div>
                <img src={Image3} alt="" />
              </div>
              <div className='p-3'>
                <h4 className='Heading-text'>HOTSPOT</h4>
                <p>Luxury hotspot : 5 most Expensive high street in the</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div>
                <img src={Image3} alt="" />
              </div>
              <div className='p-3'>
                <h4 className='Heading-text'>HOTSPOT</h4>
                <p>Luxury hotspot : 5 most Expensive high street in the</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div>
                <img src={Image3} alt="" />
              </div>
              <div className='p-3'>
                <h4 className='Heading-text'>HOTSPOT</h4>
                <p>Luxury hotspot : 5 most Expensive high street in the</p>
              </div>
            </div>


          </div>
        </div>
      </div>
      <div className='container-fluid'>

        <div className="row">
          <div className='col-lg-6'>
            <div className='headline-bar'>
              <img src={Image4} alt="" />
            </div>
            <div className='headline-text mx-4'>
              <button className='button-subscribe'>IN FOCUS</button>
              <h3 className='text-white'>Rahul Gandhi In Manipur: Chopper Ride After Women Protesters Surround Car</h3>
              <p className='text-white'>RAHUL GANDHI</p>
            </div>

            <div className='sub-news d-flex'>
              <div>
                <img src={Image6} width="150px" height="100px" alt="" />
              </div>
              <div className='ms-3'>
                <p className='text-danger'>Select Citywalk</p>
                <h5>Wow! Momo Foods enters Bhopal with Wow! </h5>
                <h6>#reel stories podcast</h6>
              </div>


            </div>

            <div className='sub-news d-flex mt-4'>

              <div>
                <img src={Image6} width="150px" height="100px" alt="" />
              </div>
              <div className='ms-3'>
                <p className='text-danger'>Select Citywalk</p>
                <h5>FNP (Ferns N Petals) appoints Ashish Goel</h5>
                <h6># Citywalk</h6>
              </div>


            </div>
            <div className='sub-news d-flex  mt-4'>

              <div>
                <img src={Image6} width="150px" height="100px" alt="" />
              </div>
              <div className='ms-3'>
                <p className='text-danger'>Food & Beverage</p>
                <h5>KFC opens another outlet in Punjab KFC opens another outlet in Punjab </h5>
                <h6># Beverage</h6>
              </div>


            </div>
          </div>

          <div className="col-lg-3">
            <div>
              <p>Latest News</p>
              <hr />
              <img src={Image6} alt="" />
              <p>Unwrapping the Archies’ reinvention plan</p>
              <img src={Image7} alt="" />
              <h5>How AI is enhancing stores, How AI is enhancing stores</h5>
              <hr />
              <h6>Croma opens 58 outlets in 6, Croma retails more than 16,000</h6>
              <p>These companies created a lot of hype when they listed on the...</p>
              <hr />
              <h6>Croma opens 58 outlets in 6, Croma retails more than 16,000</h6>
              <p>These companies created a lot of hype when they listed on the...</p>
              <hr />

            </div>
          </div>
        </div>


      </div>
      <hr />
      <div>
        <h3>Web Specials</h3>
        <div className="row">
          <div className="col-lg-4">
            <img src={Image4} width="450px" alt="" />
          </div>
          <div className="col-lg-4">
            <p><b>* Cinema industry welcomes lowering GST rates</b></p>
            <hr />
            <p><b>* Patanjali Ayurved to sell 7% stake in Patanjali</b></p>
            <hr />
            <p><b>* Select Citywalk opens 4 new stores in June</b></p>
            <hr />
            <p><b>* Govt imposes import restrictions on certain gold </b></p>
            <hr />
            <p><b>* Joom Marketplace offers a global window for sellers</b></p>
            <hr />
          </div>
          
          <div className="col-lg-4">
          <img src={Image8} width="350px" alt="" />
        </div>
        </div>
        
      </div>

    </>
  )
}

export default App