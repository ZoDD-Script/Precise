import React from 'react'
import { focale, powerlift, preciselighting, project, rinnovo, swiftrise } from '../../assets'

const Brands = () => {
  return (
    <section className="ln-section d-xl-flex" data-anchor="our-work" data-tooltip="Our work" data-ui="dark" data-navbar="navbar-light" id='our-work'>
      <div className="container align-self-xl-center">
        <div className="row mb-8">
          <div className="col-12 col-xl-6">
            <h2 className="mb-4 " data-animation="fadeInUp">Our Work</h2>
            <p className="" data-animation="fadeInUp" data-animation-delay="150">Donec sollicitudin libero vitae massa placerat tempor. Duis rutrum nisl eu ipsum varius, nec feugiat tortor vulputate. Integer pellentesque leo id metus dictum, a tristique tellus faucibus.</p>
          </div>
        </div>
        <div className="slider " data-animation="fadeInUp" data-animation-delay="300" data-slick='{"dots": true}'>

          <div className="margin-portfolio">
            <div className="portfolio-item mb-8">
              <div className="row">
                <div className="col-12 col-lg-7 mb-4 mb-lg-0">
                  <div className="item-media">
                    <a href='https://www.preciselighting.ng/' target='_blank' className="mfp-image">
                      <div className="media-container">
                        <div className="bg-image-holder bg-cover">
                          <img src={preciselighting} alt="" width={600} />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-lg-5">
                  <div className="pt-lg-8">
                    <div className="divider divider-alt bg-dark mt-0 mb-8 d-none d-lg-block"></div>
                    <h4 className="h3 item-title">Precise Lighting</h4>
                    <p className="item-cat">Lighting with Precision.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="margin-portfolio">
            <div className="portfolio-item mb-8">
              <div className="row flex-lg-row-reverse">
                <div className="col-12 col-lg-7 mb-4 mb-lg-0">
                  <div className="item-media">
                    <a href='https://www.rinnovo.ng/' target='_blank' className="mfp-image">
                      <div className="media-container">
                        <div className="bg-image-holder bg-cover">
                          <img src={rinnovo} alt="" width={600} />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-lg-5 d-lg-flex justify-content-lg-end text-lg-right">
                  <div className="pt-lg-8">
                    <div className="divider-alt bg-dark mt-0 mb-8 ml-auto mr-0 d-none d-lg-block"></div>
                    <h4 className="h3 item-title">Rinnovo</h4>
                    <p className="item-cat">Your leading source for innovative renewable energy solutions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="margin-portfolio">
            <div className="portfolio-item mb-8">
              <div className="row">
                <div className="col-12 col-lg-7 mb-4 mb-lg-0">
                  <div className="item-media">
                    <a href='https://www.swiftrise.ng/' target='_blank' className="mfp-image">
                      <div className="media-container">
                        <div className="bg-image-holder bg-cover">
                          <img src={swiftrise} alt="" width={600} />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-lg-5">
                  <div className="pt-lg-8">
                    <div className="divider divider-alt bg-dark mt-0 mb-8 d-none d-lg-block"></div>
                    <h4 className="h3 item-title">Swiftrise</h4>
                    <p className="item-cat">Redefining Elevation Solutions in Africa.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="margin-portfolio">
            <div className="portfolio-item mb-8">
              <div className="row flex-lg-row-reverse">
                <div className="col-12 col-lg-7 mb-4 mb-lg-0">
                  <div className="item-media">
                    <a href='https://www.powerliftpro.ng/' target='_blank' className="mfp-image">
                      <div className="media-container">
                        <div className="bg-image-holder bg-cover">
                          <img src={powerlift} alt="" width={600} />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-lg-5 d-lg-flex justify-content-lg-end text-lg-right">
                  <div className="pt-lg-8">
                    <div className="divider-alt bg-dark mt-0 mb-8 ml-auto mr-0 d-none d-lg-block"></div>
                    <h4 className="h3 item-title">PowerLift Pro</h4>
                    <p className="item-cat">Elevating Fitness Standards Globally.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="margin-portfolio">
            <div className="portfolio-item">
              <div className="row">
                <div className="col-12 col-lg-7 mb-4 mb-lg-0">
                  <div className="item-media">
                    <a href='https://zodd-script.github.io/Focal/' target='_blank' className="mfp-image">
                      <div className="media-container">
                        <div className="bg-image-holder bg-cover">
                          <img src={focale} alt="" width={600} />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-lg-5">
                  <div className="pt-lg-8">
                    <div className="divider divider-alt bg-dark mt-0 mb-8 d-none d-lg-block"></div>
                    <h4 className="h3 item-title">Focale</h4>
                    <p className="item-cat">The Developers Brand.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Brands