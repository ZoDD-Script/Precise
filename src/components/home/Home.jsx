import React from 'react'
import { image } from '../../assets'

const Home = () => {
  return (
    <section className="ln-section d-flex js-min-vh-100" id='home' data-aos='fade-up' data-aos-delay='300'>
      <div className="overlay overlay-advanced">
        <div className="overlay-inner bg-image-holder bg-cover bg-bottom-center">
          <img src={image} alt="background" />
        </div>
        <div className="overlay-inner bg-dark opacity-70"></div>
      </div>
      <div className="container align-self-center text-white">
        <div className="row">
          <div className="col-12 col-lg-9 col-xl-6">

            <h1 className="mb-4" data-animation="fadeInUp">Lighting That Defines Your Style</h1>
            <p className="mb-7" data-animation="fadeInUp" data-animation-delay="200">We take pride in offering a comprehensive selection of products designed to cater to all your housing requirements, leaving no stone unturned in our pursuit to provide you with the perfect housing solution for every setting.</p>
            <a href="#our-mission" className="btn btn-white mr-3 scrollto" data-animation="fadeInUp" data-animation-delay="400">Learn more</a>
            {/* <button type="button" className="btn btn-soft-white scrollto" data-animation="fadeInUp" data-animation-delay="600" data-toggle="modal" data-target="#subscribeModal">Subscribe</button> */}

          </div>
        </div>
      </div>
    </section>
    
  )
}

export default Home