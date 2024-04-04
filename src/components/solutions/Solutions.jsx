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
              <p className="" data-animation="fadeInUp" data-animation-delay="150">Mauris ut sem elementum, tristique velit sed, volutpat mauris. Ut interdum nibh sit amet imperdiet condimentum. Nulla sed tellus placerat, vehicula risus ac, sollicitudin quam. Quisque pharetra porta libero, a sagittis nisl tristique non.</p>
            </div>
          </div>
          <div className="row">

            <div className="col-12 col-lg-6 mb-8 " data-animation="fadeInUp" data-animation-delay="150">
              <h4>We are</h4>
              <p className="mb-0">Quisque ultrices non velit sit amet consectetur. Cras turpis dolor, facilisis a nibh non, ullamcorper facilisis mauris. Nulla rutrum arcu sed ligula malesuada, quis condimentum eros sollicitudin. Morbi eget lorem turpis. Maecenas id metus sapien. Aliquam et est turpis. Sed sit amet dui vel sapien sagittis pellentesque nec id sem.</p>
            </div>

            <div className="col-12 col-lg-6 mb-8 " data-animation="fadeInUp" data-animation-delay="300">
              <h4>We practice</h4>
              <p className="mb-0">Quisque ultrices non velit sit amet consectetur. Cras turpis dolor, facilisis a nibh non, ullamcorper facilisis mauris. Nulla rutrum arcu sed ligula malesuada, quis condimentum eros sollicitudin. Morbi eget lorem turpis. Maecenas id metus sapien. Aliquam et est turpis. Sed sit amet dui vel sapien sagittis pellentesque nec id sem.</p>
            </div>

            <div className="col-12 col-lg-6 mb-8 mb-lg-0 " data-animation="fadeInUp" data-animation-delay="450">
              <h4>We deliver</h4>
              <p className="mb-0">Quisque ultrices non velit sit amet consectetur. Cras turpis dolor, facilisis a nibh non, ullamcorper facilisis mauris. Nulla rutrum arcu sed ligula malesuada, quis condimentum eros sollicitudin. Morbi eget lorem turpis. Maecenas id metus sapien. Aliquam et est turpis. Sed sit amet dui vel sapien sagittis pellentesque nec id sem.</p>
            </div>

            <div className="col-12 col-lg-6 " data-animation="fadeInUp" data-animation-delay="600">
              <h4>We create and innovate</h4>
              <p className="mb-0">Quisque ultrices non velit sit amet consectetur. Cras turpis dolor, facilisis a nibh non, ullamcorper facilisis mauris. Nulla rutrum arcu sed ligula malesuada, quis condimentum eros sollicitudin. Morbi eget lorem turpis. Maecenas id metus sapien. Aliquam et est turpis. Sed sit amet dui vel sapien sagittis pellentesque nec id sem.</p>
            </div>

          </div>
        </div>
      </section>
  )
}

export default Solutions