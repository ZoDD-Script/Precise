import React from 'react'

const Socials = () => {
  return (
    <div>
      <nav className="ln-social-icons">
        <ul className="mx-auto">
          <li><a href="#!"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="#!"><i className="fab fa-twitter"></i></a></li>
          <li><a href="#!"><i className="fab fa-instagram"></i></a></li>
          <li><a href="#!"><i className="fab fa-pinterest"></i></a></li>
        </ul>
      </nav>

      {/* <!-- Fullpage - Copyright --> */}
      <div className="ln-copyright text-right">
        <p>© 2023 Lana - All Rights Reserved - <a href="#!">Terms of Service</a></p>
      </div>
    </div>
  )
}

export default Socials