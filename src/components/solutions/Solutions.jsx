import React from 'react'
import { squirrel } from '../../assets'

const Solutions = () => {
  return (
    <section className="ln-section d-xl-flex" data-anchor="our-solutions" data-tooltip="Our solutions" data-ui="light" data-navbar="navbar-dark" id='our-solutions'>
        <div className="overlay overlay-advanced">
          <img src={squirrel} alt="background" className='background-image' />
          <div className="overlay-inner bg-dark opacity-50"></div>
        </div>
        <div className="container align-self-xl-center text-white">
          <div className="row mb-8">
            <div className="col-12 col-xl-6">
              <h2 className="mb-4 " data-animation="fadeInUp">A complete marketing solution</h2>
              <p className="" data-animation="fadeInUp" data-animation-delay="150">At Precise, we don't just meet expectations; we exceed them, redefining luxury and comfort in every home and space we touch.</p>
            </div>
          </div>
          <div className="row">

            <div className="col-12 col-lg-6 mb-8 " data-animation="fadeInUp" data-animation-delay="150">
              <h4>We are</h4>
              <p className="mb-0">At the forefront of modern living, Complete Market Solution represents the pinnacle of luxury and innovation in home and lifestyle products. Our diverse offerings range from cutting-edge lighting solutions and state-of-the-art elevators to sustainable renewable energy systems, opulent homewares, and premium gym equipment. Each product is a symbol of excellence and a testament to the sophistication of contemporary life.</p>
            </div>

            <div className="col-12 col-lg-6 mb-8 " data-animation="fadeInUp" data-animation-delay="300">
              <h4>We practice</h4>
              <p className="mb-0">Integrity and excellence are the cornerstones of our business. We are committed to sustainable practices, using environmentally friendly materials and methods whenever possible. Our products are not only designed to enhance lifestyles but also to promote a healthier planet. Each item in our portfolio is crafted with care, ensuring durability and lasting beauty.</p>
            </div>

            <div className="col-12 col-lg-6 mb-8 mb-lg-0 " data-animation="fadeInUp" data-animation-delay="450">
              <h4>We deliver</h4>
              <p className="mb-0">Our commitment extends beyond providing high-quality products; we ensure a seamless experience from selection to installation. Our dedicated team of experts is there every step of the way, guaranteeing timely delivery, professional setup, and unmatched customer service. At Complete Market Solution, your comfort and satisfaction are our priorities.</p>
            </div>

            <div className="col-12 col-lg-6 " data-animation="fadeInUp" data-animation-delay="600">
              <h4>We create and innovate</h4>
              <p className="mb-0">In a world where change is the only constant, Complete Market Solution leads with creativity and innovation. We continuously explore new technologies and designs to redefine what is possible in the luxury market. Our products are not just purchases; they are investments in a better, more luxurious future.</p>
            </div>

          </div>
        </div>
      </section>
  )
}

export default Solutions