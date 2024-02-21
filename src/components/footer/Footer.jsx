import React from 'react'

const Footer = () => {
  return (
    <footer className="position-relative py-10 py-lg-12 bg-dark text-gray-500">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-12 col-xxl-10 mx-auto text-center">
            <ul className="list-inline mb-5">
              <li className="list-inline-item mx-0">
                <a className="btn btn-icon btn-text-secondary text-gray-400" href="#" tabIndex="0">
                  <i className="fab fa-facebook-f btn-icon-inner"></i>
                </a>
              </li>
              <li className="list-inline-item mx-0">
                <a className="btn btn-icon btn-text-secondary text-gray-400" href="#" tabIndex="0">
                  <i className="fab fa-twitter btn-icon-inner"></i>
                </a>
              </li>
              <li className="list-inline-item mx-0">
                <a className="btn btn-icon btn-text-secondary text-gray-400" href="#" tabIndex="0">
                  <i className="fab fa-linkedin-in btn-icon-inner"></i>
                </a>
              </li>
              <li className="list-inline-item mx-0">
                <a className="btn btn-icon btn-text-secondary text-gray-400" href="#" tabIndex="0">
                  <i className="fab fa-dribbble btn-icon-inner"></i>
                </a>
              </li>
            </ul>
            <p className="mb-0">© 2024 Precise - All Rights Reserved - <a href="#!" className="text-gray-400">Terms of Service</a></p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer