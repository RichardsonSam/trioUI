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
import Image10 from './assets/image10.svg'
import Image9 from './assets/image9.svg'
import Image11 from './assets/image11.svg'
import Image12 from './assets/image12.svg'
import Image13 from './assets/image13.svg'
import Image14 from './assets/image14.svg'
import Image15 from './assets/image15.svg'
import Image50 from './assets/image50.svg'

import Image16 from './assets/image16.svg'
import Image17 from './assets/image17.svg'
import Image18 from './assets/image18.svg'
import Image19 from './assets/image19.svg'
import Image20 from './assets/image20.svg'
// import Image21 from './assets/image21.svg'
import Image22 from './assets/image22.svg'
import Image23 from './assets/image23.svg'
import Image25 from './assets/image25.svg'
import Image27 from './assets/image27.svg'
import Image28 from './assets/image28.svg'
import Image29 from './assets/image29.svg'
import Image30 from './assets/image30.svg'
import Image42 from './assets/image 42.svg'
import Image100 from './assets/image100.svg'

// import Image44 from './assets/image 42.svg'
import Image45 from './assets/image45.svg'















const App = () => {
  return (
    <>
      <div>
        <div className=' image-arrange'>
          <img src={Image1} alt="" />
        </div>
      </div>

      <div>
        <div className='container-fluid'>
          <div className='row '>
            <div className="d-flex item-flex">
              <div className=''>
                <p className='mt-3'><i class="fa-solid fa-magnifying-glass"></i> Search here</p>
              </div>
              <div className=''>
                <img src={Image2} alt="" />
              </div>
              <div className=' mt-4'>
                <button className='button-subscribe'>SUBSCRIBE</button>
                <button className='button-sign ms-4'> SIGN IN</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=' m-5'>
        <div className='row'>


          <div className="item-flex">
            <div className='col-lg-2'>
              <i class="fa-solid fa-bars"></i>
            </div>
            <div className='col-lg-6'>
              <ul className='list d-flex '>
                <li className='ms-4'><a href="home">home</a></li>
                <li className='ms-4'> <a href="cat">categories</a></li>
                <li className='ms-4'><a href="">IR Prime</a></li>
                <li className='ms-4'><a href="">Events</a></li>
                <li className='ms-4'><a href="">BookStore</a></li>
                <li className='ms-4'><a href="">Video</a></li>
              </ul>
            </div>
            <div className='col-lg-2 '>
              <p><i class="fa-solid fa-cloud-bolt"></i> Friday,30 June 2023</p>
            </div>
          </div>
        </div>
      </div>
      <div className='titles'>
        <p>Fashion & Lifestyle * Beauty & Wellness * Food & Beverage * customer Durable & IT * Entertainment * Home Decor & furnishing </p>
      </div>


      <div className=' back-shadow mx-5'>
        <div className='container'>
          <div className="row g-3  hot-shot">
            <div className="col-lg-4 d-flex align-items-center back-colors d-flex">
              <div>
                <img src={Image3} alt="" />
              </div>
              <div className='p-3'>
                <h4 className='Heading-text'>HOTSPOT</h4>
                <p>Luxury hotspot : 5 most Expensive high street in the</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex align-items-center back-colors">
              <div>
                <img src={Image3} alt="" />
              </div>
              <div className='p-3'>
                <h4 className='Heading-text'>HOTSPOT</h4>
                <p>Luxury hotspot : 5 most Expensive high street in the</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex align-items-center back-colors">
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
      <div className=' my-5 mx-5'>

        <div className="row ">
          <div className='col-lg-6'>
            <div className='headline-bar'>
              <img src={Image4} width='100%' alt="" />
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
      <div className=' mx-5'>
        <h3>Web Specials</h3>
        <div className="row">
          <div className="col-lg-4 v-line">
            <img src={Image4} width="450px" alt="" />
          </div>
          <div className="col-lg-4 ">
            <div className='v-line'>
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
          </div>

          <div className="col-lg-4">
            <img src={Image8} width="300px" alt="" />
          </div>
        </div>

      </div>
      <div className=" mx-5">
        <div className='d-flex flex-wrap gap-3'>
          <div className='v-line'>
            <span className='text-danger'>•</span>B2B managed marketplace the yarn
          </div>
          <div className='v-line'>
            <span className='text-danger'>•</span>Sequoia Capital exits Go
            Fashion
          </div>
          <div className='v-line'>
            <span className='text-danger'>•</span>B2B managed marketplace the yarn
          </div>
          <div className='v-line'>
            <span className='text-danger'>•</span>Sequoia Capital exits Go
            Fashion
          </div>
        </div>
      </div>
      <div className=" mx-5">
        <div className="row mt-3 g-3 mb-4">
          <div className="col-lg-2 md-2 man-wid">
            <div className="">
              <img src={Image10} alt="" />
              <div className="card-body p-2">
                <p className='card-title'>Fashion brand icons: Shailesh Chaturvedi of Arvind Fashions</p>
              </div>
            </div>
          </div>

          <div className="col-lg-2 md-2 man-wid">
            <div className="">
              <img src={Image9} alt="" />
              <div className="card-body p-2">
                <p className='card-title'>Fashion brand icons: Shailesh Chaturvedi of Arvind Fashions</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 md-2 man-wid">
            <div className="">
              <img src={Image11} alt="" />
              <div className="card-body p-2">
                <p className='card-title'>Fashion brand icons: Shailesh Chaturvedi of Arvind Fashions</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 md-2 man-wid">
            <div className="">
              <img src={Image12} alt="" />
              <div className="card-body p-2">
                <p className='card-title'>Fashion brand icons: Shailesh Chaturvedi of Arvind Fashions</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 md-2 man-wid">
            <div className="">
              <img src={Image13} alt="" />
              <div className="card-body p-2">
                <p className='card-title'>Fashion brand icons: Shailesh Chaturvedi of Arvind Fashions</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="mx-5 ">
        <h5 class="section-heading">Trending</h5>
        <div class="trending-tags">
          <button class="btn btn-outline-secondary btn-sm">Rahul Gandhi In Manipur</button>
          <button class="btn btn-outline-secondary btn-sm">Meta</button>
          <button class="btn btn-outline-secondary btn-sm">E-Commerce</button>
          <button class="btn btn-outline-secondary btn-sm">Fashion</button>
          <button class="btn btn-outline-secondary btn-sm">Rahul Gandhi In Manipur</button>
          <button class="btn btn-outline-secondary btn-sm">Meta</button>
          <button class="btn btn-outline-secondary btn-sm">E-Commerce</button>
          <button class="btn btn-outline-secondary btn-sm">Fashion</button>
          <button class="btn btn-outline-secondary btn-sm">Rahul Gandhi In Manipur</button>
          <button class="btn btn-outline-secondary btn-sm">Meta</button>
          <button class="btn btn-outline-secondary btn-sm">E-Commerce</button>
          <button class="btn btn-outline-secondary btn-sm">Fashion</button>
          <button class="btn btn-outline-secondary btn-sm">Fashion</button>
          <button class="btn btn-outline-secondary btn-sm">Rahul Gandhi In Manipur</button>
          <button class="btn btn-outline-secondary btn-sm">Meta</button>
          <button class="btn btn-outline-secondary btn-sm">E-Commerce</button>

        </div>
      </div>

      <div class="my-5 mx-5">
        <h5 class="section-heading">Leaders Ink</h5>

        <div class="row g-3 ">



          <div className='d-flex col-md-7'>

            <div class="col-md-4 p-3">
              <div class="card">
                <img src={Image16} class="card-img-top" alt="" />
                <div class="card-body">
                  <h6 class="card-title">Top 5 iconic Apple stores...</h6>
                  <p class="card-text small">From a total of around 522 Apple stores...</p>
                  <p class="author">Arundhati Roy</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 p-3">
              <div class="card">
                <img src={Image15} class="card-img-top" alt="" />
                <div class="card-body">
                  <h6 class="card-title">Top 5 iconic Apple stores...</h6>
                  <p class="card-text small">From a total of around 522 Apple stores...</p>
                  <p class="author">Arundhati Roy</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 p-3">
              <div class="card">
                <img src={Image14} class="card-img-top" alt="" />
                <div class="card-body">
                  <h6 class="card-title">Top 5 iconic Apple stores...</h6>
                  <p class="card-text small">From a total of around 522 Apple stores...</p>
                  <p class="author">Arundhati Roy</p>
                </div>
              </div>


            </div>


          </div>


          <div class="col-md-5 ">
            <div class=" mx-5">
              <div class="d-flex justify-content-between align-items-center">
                <h5 class="section-heading">Research</h5>
                <a href="#" class="text-decoration-none small">See more</a>
              </div>

            </div >

            <div class="row">
              <div class="col-md-6">
                <div class="card">
                  <img src={Image17} class="card-img-top" alt="" />
                  <div class="card-body">
                    <h6 class="card-title">Human touchpoint is extremely...</h6>
                    <span class="badge bg-danger">FASHION</span>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card">
                  <img src={Image18} class="card-img-top" alt="" />
                  <div class="card-body">
                    <h6 class="card-title">Human touchpoint is extremely...</h6>
                    <span class="badge bg-danger">FASHION</span>
                  </div>
                </div>
              </div>

            </div>

          </div>


        </div>

      </div>
      <div className='ms-5 back-color'>
        <h5 class="section-heading text-white">IR VIDEO WALL</h5>
        <div className="row">
          <div className="col-lg-6">
            <img src={Image19} className='' alt="" width='100%' />
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-4">
                <div >
                  <h5 class="section-heading text-white">IR VIDEO WALL</h5>
                  <img src={Image22} width='100%' alt="" />
                  <p className='text-white'>Senco Gold IPO subscribed 69% on first day of </p>
                </div>
                <div >

                  <img src={Image23} width='100%' alt="" />
                  <p className='text-white'>Senco Gold IPO subscribed 69% on first day of subscription</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div >
                  <h5 class="section-heading text-white">THE STORE</h5>
                  <img src={Image23} width='100%' alt="" />
                  <p className='text-white'>Senco Gold IPO subscribed 69% on first day of </p>
                </div>
                <div >

                  <img src={Image20} width='100%' alt="" />
                  <p className='text-white'>Senco Gold IPO subscribed 69% on first day of subscription</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div >
                  <h5 class="section-heading text-white">IR STUDIO</h5>
                  <img src={Image22} width='100%' alt="" />
                  <p className='text-white'>Senco Gold IPO subscribed 69% on first day of </p>
                </div>
                <div >

                  <img src={Image23} width='100%' alt="" />
                  <p className='text-white  '>Senco Gold IPO subscribed 69% on first day of subscription</p>
                </div>
              </div>


            </div>
          </div>
        </div>

      </div>
      <div className="image-arrange  my-5">
        <img src={Image25} alt="" />
      </div>

      {/* jj */}

      <div class="container py-4">
        <div class="row">

          <div class="col-lg-8">
            <div class="section-heading">
              <h5>Fashion & Lifestyle</h5>
              <a href="#">See more →</a>
            </div>
            <div class="row g-3">

              <div class="col-md-6">

                <div class="row ">
                  <div className="col-md-5">
                    <img src={Image45} class="card-img-top" alt="..." /></div>
                  <div class="col-md-7">
                    <div class="category-label">FASHION | FOOD</div>
                    <h6 class="card-title">What makes Fila unique is its attitude and...</h6>
                    <p class="card-text text-muted small">The singer-songwriter has been spotted in the hybrid garment...</p>
                  </div>
                  <div className="col-md-5 mt-3">
                    <img src={Image45} class="card-img-top" alt="..." /></div>
                  <div class="col-md-7 mt-3">
                    <div class="category-label">FASHION | FOOD</div>
                    <h6 class="card-title">What makes Fila unique is its attitude and...</h6>
                    <p class="card-text text-muted small">The singer-songwriter has been spotted in the hybrid garment...</p>
                  </div>
                </div>
              </div>


              <div class="col-md-6">
                <div class="row">
                  <div className="col-md-5">
                    <img src={Image45} class="card-img-top" alt="..." /></div>
                  <div class="col-md-7">
                    <div class="category-label">FASHION | FOOD</div>
                    <h6 class="card-title">What makes Fila unique is its attitude and...</h6>
                    <p class="card-text text-muted small">The singer-songwriter has been spotted in the hybrid garment...</p>
                  </div>
                  <div className="col-md-5 mt-3">
                    <img src={Image45} class="card-img-top" alt="..." /></div>
                  <div class="col-md-7 mt-3">
                    <div class="category-label">FASHION | FOOD</div>
                    <h6 class="card-title">What makes Fila unique is its attitude and...</h6>
                    <p class="card-text text-muted small">The singer-songwriter has been spotted in the hybrid garment...</p>
                  </div>

                </div>
              </div>


            </div>
          </div>


          <div class="col-lg-4">
            <div class="section-heading">
              <h5>Beauty & Wellness</h5>
              <a href="#">See more →</a>
            </div>
            <div class="right-news">

              <div class="news-item">
                <img src={Image100} alt="news" />
                <div>
                  <div class="category-label">BEAUTY | NEWS</div>
                  <div class="news-title">Sugar Cosmetics unveils its 200th brand-owned store</div>
                </div>
              </div>


              <div class="news-item">
                <img src={Image100} alt="news" />
                <div>
                  <div class="category-label text-danger">WELLNESS | NEWS</div>
                  <div class="news-title">Athiya Shetty becomes the face of Just Herb’s...</div>
                </div>
              </div>
              <div class="news-item">
                <img src={Image100} alt="news" />
                <div>
                  <div class="category-label text-danger">WELLNESS | NEWS</div>
                  <div class="news-title">Athiya Shetty becomes the face of Just Herb’s...</div>
                </div>
              </div>
              <div class="news-item">
                <img src={Image100} alt="news" />
                <div>
                  <div class="category-label text-danger">WELLNESS | NEWS</div>
                  <div class="news-title">Athiya Shetty becomes the face of Just Herb’s...</div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>

      {/* gggg */}

      <div className="row">
        <div className='ms-5 '>

          <h5 class="section-heading">Food & Beverage</h5>
          <div className="row g-3">
            <div className='col-lg-2'>
              <div className='card'>
                <img src={Image30} alt="" />
                <p className='mt-3'>Wow! Momo Foods enters Bhopal with Wow! Momo, Wow China</p>
                <a href="#" class="card-link">Life Style</a>
              </div>
            </div>
            <div className='col-lg-2'>
              <div className='card'>
                <img src={Image27} alt="" />
                <p className='mt-3'>Wow! Momo Foods enters Bhopal with Wow! Momo, Wow China</p>
                <a href="#" class="card-link">Life Style</a>
              </div>
            </div>
            <div className='col-lg-2'>
              <div className='card'>
                <img src={Image28} alt="" />
                <p className='mt-3' >Wow! Momo Foods enters Bhopal with Wow! Momo, Wow China</p>
                <a href="#" class="card-link">Life Style</a>
              </div>
            </div>
            <div className='col-lg-2'>
              <div className='card'>
                <img src={Image27} alt="" />
                <p className='mt-3'>Wow! Momo Foods enters Bhopal with Wow! Momo, Wow China</p>
                <a href="#" class="card-link">Life Style</a>
              </div>
            </div>
            <div className='col-lg-2'>
              <div className='card'>
                <img src={Image29} alt="" />
                <p className='mt-3'>Wow! Momo Foods enters Bhopal with Wow! Momo, Wow China</p>
                <a href="#" class="card-link">Life Style</a>
              </div>
            </div>
            <div className='col-lg-2'>
              <div className='card'>
                <img src={Image27} alt="" />
                <p className='mt-3'>Wow! Momo Foods enters Bhopal with Wow! Momo, Wow China</p>
                <a href="#" class="card-link">Life Style</a>
              </div>
            </div>
          </div>
        </div>

        <div className="image-arrange  my-5">
          <img src={Image50} alt="" />
        </div>

        <div className="mt-5 m-5">
          <h5 class="section-heading">Reconnect</h5>


          <div className='row'>
            <div className="row col-md-10">
              <div className='col-lg-3'>
                <div className="card">
                  <img src={Image27} alt="" />
                  <h5 className='ms-3'>Arvind Fashions’ data-driven digital transformation</h5>
                  <p className='ms-3'>In 2018, Uniqlo sent Tomohiko Sei to India to spearhead its entry..</p>
                  <a className='ms-3' href="#" class="card-link">#Life Style</a>

                </div>
              </div>
              <div className='col-lg-3'>
                <div className="card">
                  <img src={Image30} alt="" />
                  <h5 className='ms-3'>Arvind Fashions’ data-driven digital transformation</h5>
                  <p className='ms-3'>In 2018, Uniqlo sent Tomohiko Sei to India to spearhead its entry..</p>
                  <a className='ms-3' href="#" class="card-link">#Life Style</a>

                </div>
              </div>
              <div className='col-lg-3'>
                <div className="card">
                  <img src={Image27} alt="" />
                  <h5 className='ms-3'>Arvind Fashions’ data-driven digital transformation</h5>
                  <p className='ms-3'>In 2018, Uniqlo sent Tomohiko Sei to India to spearhead its entry..</p>
                  <a className='ms-3' href="#" class="card-link">#Life Style</a>

                </div>
              </div>
              <div className='col-lg-3'>
                <div className="card">
                  <img src={Image28} alt="" />
                  <h5 className='ms-3'>Arvind Fashions’ data-driven digital transformation</h5>
                  <p className='ms-3'>In 2018, Uniqlo sent Tomohiko Sei to India to spearhead its entry..</p>
                  <a className='ms-3' href="#" class="card-link">#Life Style</a>

                </div>
              </div>

            </div>

            <div className="col-md-2">
              <p className='copy-rights'>- Advertisement -</p>
              <img src={Image42} alt="" />
            </div>

          </div>

        </div>
        <div >

        </div>

      </div>





      {/* footerSection */}

      <div className="m-5">
        <div className="row g-3">
          <div className="col-lg-3">
            <img src={Image2} alt="" />
            <h5 className='my-2'>New Delhi</h5>
            <p>Images Multimedia Ltd.</p>
            <p>S-61 A, Pocket S, Okhla Phase II, Okhla Industrial Estate, New Delhi, Delhi 110020</p>
            <p>Images Multimedia Ltd.</p>
            <h5 className='my-2'>New Delhi</h5>
            <p>Images Multimedia Ltd.</p>
            <p>S-61 A, Pocket S, Okhla Phase II, Okhla Industrial Estate, New Delhi, Delhi 110020</p>
            <p>Images Multimedia Ltd.</p>
            <h5 className='my-2'>Contact</h5>
            <p><i class="fa-solid fa-phone"></i> + 91 7305385996</p>
            <p><i class="fa-solid fa-envelope"></i> richie@gmail.com</p>


          </div>
          <div className="col-lg-2   ">
            <h5 className='my-4'>About Us</h5>
            <p className='my-3'>About IndiaRetailing.com</p>
            <p className='my-3'>Meet the team</p>
            <p className='my-3'>Advertise with us</p>
            <p className='my-3'>Contact us</p>
          </div>
          <div className="col-lg-2">
            <h5 className='my-4'>CATEGORIES</h5>
            <p>Fashion & Lifestyle</p>
            <p>Beauty & Wellness</p>
            <p>Food & Beverage</p>
            <p>Consumer Durables & IT</p>
            <p>Entertainment</p>
            <p>Home Décor & Furnishing</p>
            <p>Specialty Retail</p>
          </div>
          <div className="col-lg-2">
            <h5 className='my-4'>FEATURES</h5>
            <p>Leaders Ink</p>
            <p>People</p>
            <p>Finance & Funding </p>
            <p>D2C</p>
            <p>Shopping Centers</p>
            <p>Results</p>
            <p>Case Studies</p>
          </div>
          <div className="col-lg-2">
            <h5 className='my-4'>EVENTS</h5>
            <p>India Food Forum</p>
            <p>Shopping Centre Next</p>
            <p>Phygital Retail Convention</p>
            <p>India D2C Summit & Awards</p>
            <p>Internet Commerce Summit</p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="row m-5 g-3">
          <div className="col-lg-3">
            <h5 className='my-4'>Our Social Media</h5>
            <div class="mt-4 logo">
              <span class=""><i class="fa-brands fa-x-twitter border app-logo"></i></span><span class="ps-2"><i
                class="fa-brands fa-facebook border app-logo"></i></span><span class="ps-2"><i
                  class="fa-brands fa-instagram border app-logo"></i></span><span class="ps-2"><i
                    class="fa-brands fa-linkedin border app-logo"></i></span>
            </div>
            <h5 className='my-4'>Download Indiaretailing App</h5>

          </div>
          <div className="col-lg-2">
            <h5 className='my-4'>BOOKSTORE</h5>
            <p>Magazines</p>
            <p>Yearbooks</p>
            <p>Other publications</p>

          </div>
          <div className="col-lg-2">
            <h5 className='my-4'>Videos</h5>
            <p>Retail with Rasul Bailay</p>
            <p>The Store</p>
            <p>IR Studio</p>
          </div>
          <div className="col-lg-2">
            <h5 className='my-4'>IR Prime Subscription box</h5>
            <p>Retail with Rasul Bailay</p>
            <p>The Store</p>
            <p>IR Studio</p>
          </div>
          <div className="col-lg-2">
            <h5 className='my-4'>RETAIL FUNCTIONS</h5>
            <p>Marketing</p>
            <p>Technology</p>
            <p>Operations</p><p>HR</p>
            <p>Supply Chain</p>
          </div>
        </div>
      </div>
      <div className="container ">
        <hr />
        <p className='copy-rights' >Copyright © 2023 Indiaretailing.com. All Rights Reserved.</p>
      </div>
    </>
  )
}

export default App