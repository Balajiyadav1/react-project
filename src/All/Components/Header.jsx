import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
          <img src="assets/logos/ct-logo-1.png" alt="Logo" width="19" height="19" className="d-inline-block align-text-center" />
          <span className='cleartrip-log-text place-content-center'>cleartrip</span>
          </a>

          {/* Login / sigup */}
          <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Login</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  Show a second modal and hide this one with the button below.
                </div>
                <div className="modal-footer">
                  <button className="btn btn-dark" data-bs-toggle="modal">get otp</button>
                </div>
              </div>
            </div>
          </div>
          <div classNameName='login-btn '>
            <button className="btn w-32 mr-48 bg-blue-600 text-white text-sm font-medium justify-self-auto hover:bg-blue-800 active:bg-blue-800" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Log in / Sig up</button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
