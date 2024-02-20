import React from 'react'

const Contact = () => {
  return (
    <section className="ln-section d-xl-flex bg-light" data-anchor="contact" data-tooltip="Contact" data-ui="dark" data-navbar="navbar-light">
      <div className="container align-self-center">
        <div className="row mb-7">
          <div className="col-12 col-xl-6">
            <h2 className="mb-4 " data-animation="fadeInUp">Contact Us</h2>
            <p className="" data-animation="fadeInUp" data-animation-delay="150">Want to say hello? Want to know more about us? Give us a call or drop us an email and we will get back to you as soon as we can.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-5 mb-8 mb-lg-0">
            <div className="row">

              <div className="col-12 col-md-4 col-lg-6 mb-8 mb-md-0 mb-lg-5 " data-animation="fadeInUp" data-animation-delay="150">
                <div className="icon-5x text-primary mb-4">
                  <i className="ti-mobile"></i>
                </div>
                <p className="mb-0">(0091) 1111 1234567<br/>
                (084) 2222 1234567</p>
              </div>

              <div className="col-12 col-md-4 col-lg-6 mb-8 mb-md-0 mb-lg-5 " data-animation="fadeInUp" data-animation-delay="150">
                <div className="icon-5x text-primary mb-4">
                  <i className="ti-location-pin"></i>
                </div>
                <p className="mb-0">69 Halsey St, New York, Ny 10002,<br/>
                United States</p>
              </div>

              <div className="col-12 col-md-4 col-lg-6 " data-animation="fadeInUp" data-animation-delay="150">
                <div className="icon-5x text-primary mb-4">
                  <i className="ti-email"></i>
                </div>
                <p className="mb-0"><a href="mailto:support@example.com" className="text-dark">support@example.com</a><br/>
                <a href="mailto:hello@example.com" className="text-dark">hello@example.com</a></p>
              </div>

            </div>
          </div>
          <div className="col-12 col-lg-6 offset-lg-1 " data-animation="fadeInUp" data-animation-delay="150">
            <div className="contact-form">
              <form className="mb-0" id="cf" name="cf" action="include/sendemail.php" method="post" autoComplete="off">
                <div className="form-row">

                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <input type="text" id="cf-name" name="cf-name" placeholder="Enter your name" className="form-control required" />
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <input type="email" id="cf-email" name="cf-email" placeholder="Enter your email address" className="form-control required" />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <input type="text" id="cf-subject" name="cf-subject" placeholder="Subject (Optional)" className="form-control" />
                    </div>
                  </div>

                  <div className="col-12 mb-4">
                    <div className="form-group">
                      <textarea name="cf-message" id="cf-message" placeholder="Here goes your message" className="form-control required" rows="7"></textarea>
                    </div>
                  </div>

                  <div className="col-12 d-none">
                    <input type="text" id="cf-botcheck" name="cf-botcheck" value="" />
                  </div>

                  <input type="hidden" name="prefix" value="cf-" />

                  <div className="col-12">
                    <button className="btn btn-primary" type="submit" id="cf-submit" name="cf-submit">Send Message</button>
                  </div>

                </div>
              </form>
              <div className="contact-form-result"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact