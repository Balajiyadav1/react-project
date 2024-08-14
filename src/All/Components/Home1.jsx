import React from 'react'
import './Home1.css'

const Home1 = () => {
  return (
    <div>
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="assets/logos/ct-logo-1.png" alt="Logo" width="19" height="19" class="d-inline-block align-text-center" />
                    <span className='cleartrip-log-text'>cleartrip</span>
                </a>
                <div className='account-wallet'>
                    <a className="navbar-brand" href="#">
                        <img src="/assets/icons/wallet-icon.png" alt="icon" width="20" height="20" />
                        <span>₹0</span>
                    </a>
                </div> 

                <div className='user-account'>   
                    <a className="navbar-brand user-account-1" href="#">
                        <img src="/assets/icons/user-icon.png" alt="icon" width="20" height="20" />
                        <span>My account</span>
                    </a>
                </div>
            </div>
        </nav>

        {/* Sidnavbar */}
        <nav className="nav flex-column">
            <div className='nav-side-bar'>
                <div className='sid-nav-bar'>
                <div>
                    <a class="nav-link active" aria-current="page" href="#">
                    <img src='/assets/icons/flight-icon.png' alt='FLIGHT_IMAGE' width="20" height="20"/>
                        <span className='flight-icon-span'>Flights</span>
                    </a>
                </div>
                <div>
                    <a class="nav-link" aria-current="page" href="#">
                    <img src='/assets/icons/hotels-icon.png' alt='FLIGHT_IMAGE' width="20" height="20"/>
                        <span className='flight-icon-span'>Hotels</span>
                    </a>
                </div>
                <div>
                    <a class="nav-link " aria-current="page" href="#">
                    <img src='/assets/icons/bus-icon.png' alt='FLIGHT_IMAGE' width="18" height="18"/>
                    <span className='flight-icon-span'>Bus</span>
                    </a>
                </div>
                <div>
                    <a class="nav-link " aria-current="page" href="#">
                    <img src='/assets/icons/offers-icon.png' alt='FLIGHT_IMAGE' width="20" height="20"/>
                        <span className='flight-icon-span'>Offers</span>
                    </a>
                </div>
                <div>
                    <a class="nav-link " aria-current="page" href="#">
                    <img src='/assets/icons/my_trip-icon.png' alt='FLIGHT_IMAGE' width="20" height="20"/>
                        <span className='flight-icon-span'>My trip</span>
                    </a>
                </div>
                <div>
                    <a class="nav-link" aria-current="page" href="#">
                    <img src='/assets/icons/business-icon.png' alt='FLIGHT_IMAGE' width="20" height="20"/>
                        <span className='flight-icon-span'>Cleartrip for Business</span>
                    </a>
                </div>
                <div>
                    <a class="nav-link " aria-current="page" href="#">
                    <img src='/assets/icons/support-icon1.png' alt='FLIGHT_IMAGE' width="20" height="20"/>
                        <span className='flight-icon-span'>Support</span>
                    </a>
                </div>
                </div>
            </div>
        </nav>

        {/* card-1 */}
        <div className='card w-8'>
            <div className='card-1-img' id='card-1-img'>
               <img src='/assets/images/CLEAR_TRIP_MS_DHONI_DESKTOP.webp' alt='MS_DHONI_DESKTOP' width="200" height="200" />
            </div>
            <div>
                <div className='card-1-name' id='card-1-name'>
                    <h3>Search flights</h3>
                    <p>Get unbelivable deals with Travel Max Sale!</p>
                </div>
            </div>
        </div>

        {/* card-2 section */}
        {/* <div className='card' id='card-2'>
            <div >
                <div className='arrow-img'>
                <img src='/assets/icons/left-arrow-icon.png' alt='LEFT_ARROW_IMG' width='35'  />
                </div>
                <div>
                <div class="form-btn-1">
                    <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <span>One way</span>
                    </button>
                    <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">One Way</a></li>
                    <li><a class="dropdown-item" href="#">Round trip</a></li>
                    </ul>
                </div>
                <div>
                    <div className='user-img'>
                    <img src='/assets/icons/user-icon1.png' alt='USER_IMG'/>
                    </div>
                    <div class="form-btn-2">
                    <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <span>1 Adult, Ecomony</span>
                    </button>
                    <ul class="dropdown-menu">
                        <li>
                        <a class="dropdown-item"><span className='adult-a'>Adult</span></a>
                        <p className='adult-p'>(12+ Years)</p>
                        </li>
                        <div className='ls-reset flex flex-middle nonselect'>
                        <li className='flex-inline'>
                            <svg width='32' height='32' viewBox='0 0 32 32' fill='none' className='current-stroke c-gray-20 c-not-allowed'>
                            <path d='M9 16H23' stroke='#B3B3B3' strokeLinecap="round" strokeLinejoin='round'></path>
                            <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke='#E6E6E6'></rect>
                            </svg>
                        </li>
                        <li className='fs-4 mx-5 flex-inline flex-center' width="12">1</li>
                        <li className='flex-inline'>
                            <svg width='32' height='32' viewBox='0 0 32 32' fill='none' className='current-stroke c-blue c-pointer'>
                            <path d="M16 9V23M9 16H23" stroke='#3366CC' strokeLinecap='round' strokeLinejoin='round'></path>
                            <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke='#3366CC'></rect>
                            </svg>
                        </li>
                        </div>

                        <li>
                        <a class="dropdown-item"><span className='adult-a'>Children</span></a>
                        <p className='adult-p'>(2-12 yrs)</p>
                        </li>
                        <div className='ls-reset flex flex-middle nonselect'>
                        <li className='flex-inline'>
                            <svg width='32' height='32' viewBox='0 0 32 32' fill='none' className='current-stroke c-gray-20 c-not-allowed'>
                            <path d='M9 16H23' stroke='#B3B3B3' strokeLinecap="round" strokeLinejoin='round'></path>
                            <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke='#E6E6E6'></rect>
                            </svg>
                        </li>
                        <li className='fs-4 mx-5 flex-inline flex-center' width="12">1</li>
                        <li className='flex-inline'>
                            <svg width='32' height='32' viewBox='0 0 32 32' fill='none' className='current-stroke c-blue c-pointer'>
                            <path d="M16 9V23M9 16H23" stroke='#3366CC' strokeLinecap='round' strokeLinejoin='round'></path>
                            <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke='#3366CC'></rect>
                            </svg>
                        </li>
                        </div>

                        <li>
                        <a class="dropdown-item"><span className='adult-a'>Infants</span></a>
                        <p className='adult-p'>(Below 2 yrs)</p>
                        </li>
                        <div className='ls-reset flex flex-middle nonselect'>
                        <li className='flex-inline'>
                            <svg width='32' height='32' viewBox='0 0 32 32' fill='none' className='current-stroke c-gray-20 c-not-allowed'>
                            <path d='M9 16H23' stroke='#B3B3B3' strokeLinecap="round" strokeLinejoin='round'></path>
                            <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke='#E6E6E6'></rect>
                            </svg>
                        </li>
                        <li className='fs-4 mx-5 flex-inline flex-center' width="12">1</li>
                        <li className='flex-inline'>
                            <svg width='32' height='32' viewBox='0 0 32 32' fill='none' className='current-stroke c-blue c-pointer'>
                            <path d="M16 9V23M9 16H23" stroke='#3366CC' strokeLinecap='round' strokeLinejoin='round'></path>
                            <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke='#3366CC'></rect>
                            </svg>
                        </li>
                        </div>
                        <div className='adult-btn-1'>
                        <button class="btn btn-outline-primary">Economy</button>
                        </div>
                        <div className='adult-btn-2'>
                        <button class="btn btn-outline-primary">Business class</button>
                        </div>
                        <div className='adult-btn-3'>
                        <button class="btn btn-outline-primary">First class</button>
                        </div>
                        <div className='adult-btn-4'>
                        <button class="btn btn-outline-primary">Premium economy</button>
                        </div>
                    </ul>
                    <div className='cointer-btn'>
                        <div className='cointer-btn-1'>
                            <div className='button-1'>
                                <button class="btn">
                                    <span>Regular fare</span>
                                </button>
                            </div>
                            <div className='button-1'>
                                <button class="btn">
                                    <span>Senior citizen fare</span>
                                </button>
                            </div>
                            <div className='button-1'>
                                <button class="btn">
                                    <span>Student fare</span>
                                </button>
                            </div>
                            <div className='button-1'>
                                <button class="btn">
                                    <span>Armed forces fare</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div> */}
                {/* where to and where from */}
                {/* <div>
                    <div className='where-from-1'>
                    <div className="p-3">
                        <img src='/assets/icons/airplane-takeoff-icon.png' alt='FLIGHT_TAKEOFF_ICON' />
                        <input type="text" className="where-from" placeholder="Where from?"/>
                    </div>
                    </div>
                    
                    <div className="where-to-1">
                        <div className="p-3">
                            <img src='/assets/icons/airplane-landing-icon.png' alt='FLIGHT_LANDING_ICON'/>
                            <input type="text" className="where-to" placeholder="Where to?"  />
                        </div>
                    </div>
                </div>
                <div className='calendar-field'>
                    <img src='/assets/icons/calendar_icon.png' width='20' height='20' />
                    <h6>Here calendar field</h6>
                </div>
                <div>
                    <div className='flex flex-around  home-search-btn'>
                        <span className='flex flex-middle search-flights-span'>Search flights</span>
                    </div>
                </div>
            </div>
        </div>  */}

        {/* Banners section */}
        {/* <div>
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="2000">
                    <img src="/assets/banners/small banners/banner4.webp" class="d-block w-100" alt="BANNER_4" />
                </div>
                <div class="carousel-item" data-bs-interval="2500">
                    <img src="/assets/banners/small banners/banner1.webp" class="d-block w-100" alt="BANNER_1" />
                </div>
                <div class="carousel-item" data-bs-interval="2500">
                    <img src="/assets/banners/small banners/banner2.webp" class="d-block w-100" alt="BANNER_2" />
                </div>
                <div class="carousel-item" data-bs-interval="2500">
                    <img src="/assets/banners/small banners/banner3.webp" class="d-block w-100" alt="BANNER_3" />
                </div>
                <div class="carousel-item" data-bs-interval="2500">
                    <img src="/assets/banners/small banners/banner5.webp" class="d-block w-100" alt="BANNER_5" />
                </div>
                <div class="carousel-item" data-bs-interval="2500">
                    <img src="/assets/banners/small banners/banner6.webp" class="d-block w-100" alt="BANNER_6" />
                </div>
                <div class="carousel-item" data-bs-interval="2500">
                    <img src="/assets/banners/small banners/banner7.webp" class="d-block w-100" alt="BANNER_7" />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
        </div>
        </div> */}
    </div>
  )
}

export default Home1