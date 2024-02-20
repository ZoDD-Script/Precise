import React from 'react'

const Offer = () => {
  return (
    <section className="ln-section d-xl-flex bg-light" data-anchor="what-we-do" data-tooltip="What we do" data-ui="dark" data-navbar="navbar-light" id='what-we-do'>
      <div className="container align-self-xl-center">

        <div className="row">
          <div className="col-12 col-xl-5 mb-8 mb-xl-0">
            <h2 className=" mb-4" data-animation="fadeInUp">What we Do</h2>
            <p className="" data-animation="fadeInUp" data-animation-delay="150"><span>Fusce massa dolor, mattis sed ultrices ut, placerat ut leo. Donec sed fringilla lectus, non vulputate orci. Integer id libero euismod, interdum ligula vel, porttitor magna. Sed euismod maximus finibus. Pellentesque tempus ultricies nisi at cursus. Nulla at nisi tellus. Suspendisse potenti.</span></p>
          </div>
          <div className="col-12 col-xl-6 offset-xl-1">
            <div className="row">

              <div className="col-md-6 col-sm-6 mb-8 " data-animation="fadeInUp">
                <div className="icon-7x text-primary mb-4">
                  <i className="ti-timer"></i>
                </div>
                <h3 className="h4 mb-0">Launch Quickly</h3>
              </div>

              <div className="col-md-6 col-sm-6 mb-8 " data-animation="fadeInUp" data-animation-delay="150">
                <div className="icon-7x text-primary mb-4">
                  <i className="ti-brush-alt"></i>
                </div>
                <h3 className="h4 mb-0">Stylish Design</h3>
              </div>

              <div className="col-md-6 col-sm-6 mb-8 " data-animation="fadeInUp" data-animation-delay="300">
                <div className="icon-7x text-primary mb-4">
                  <i className="ti-book"></i>
                </div>
                <h3 className="h4 mb-0">Well Documented</h3>
              </div>

              <div className="col-md-6 col-sm-6 mb-8 " data-animation="fadeInUp" data-animation-delay="450">
                <div className="icon-7x text-primary mb-4">
                  <i className="ti-layers"></i>
                </div>
                <h3 className="h4 mb-0">Multiple Styles</h3>
              </div>

              <div className="col-md-6 col-sm-6 mb-8 mb-sm-0 " data-animation="fadeInUp" data-animation-delay="600">
                <div className="icon-7x text-primary mb-4">
                  <i className="ti-settings"></i>
                </div>
                <h3 className="h4 mb-0">Fully Customizable</h3>
              </div>

              <div className="col-md-6 col-sm-6 " data-animation="fadeInUp" data-animation-delay="750">
                <div className="icon-7x text-primary mb-4">
                  <i className="ti-headphone-alt"></i>
                </div>
                <h3 className="h4 mb-0">Friendly Support</h3>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Offer