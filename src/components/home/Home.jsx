import React from 'react'
import { image, map } from '../../assets'

const Home = () => {
  return (
    <section className="ln-section d-flex js-min-vh-100" id='home' data-aos='fade-up' data-aos-delay='300'>
      <div className="overlay overlay-advanced">
        <img src={map} alt="background" className='background-image' />
        <div className="overlay-inner bg-dark opacity-70"></div>
      </div>
      <div className="container align-self-center text-white">
        <div className="row">
          <div className=" col-lg-9">

            <h1 className="mb-4" data-animation="fadeInUp">Lighting That Defines Your Style</h1>
            <p className="mb-7" data-animation="fadeInUp" data-animation-delay="200">We don't just offer products, we deliver complete solutions. From lighting to furniture, renewable energy to development, and elevators to gym equipment, we have everything you need to create the perfect environment for your home or business. We leave no detail overlooked in our commitment to finding the ideal fit for any space.</p>
            <a href="#our-mission" className="btn btn-white mr-3 scrollto" data-animation="fadeInUp" data-animation-delay="400">Learn more</a>
            {/* <button type="button" className="btn btn-soft-white scrollto" data-animation="fadeInUp" data-animation-delay="600" data-toggle="modal" data-target="#subscribeModal">Subscribe</button> */}

          </div>
        </div>
      </div>
    </section>
    
  )
}

export default Home