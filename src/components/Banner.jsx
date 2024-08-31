import React from 'react'
import '../style/Banner.css'
const Banner = () => {
  return (
   <>
      <section id="hero" class="min-vh-100 d-flex align-items-center text-center ">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1  class="text-uppercase text-black fw-semibold display-1">Hospital Management System</h1>
                    {/* <!-- <h5 class="text-white mt-3 mb-4" >WE ARE TEAM OF TALENTED DESIGNERS MAKING WEBSITES WITH BOOTSTRAP</h5> --> */}
                    <div >
                        <a href="#" class="btn btn-brand me-2">Get Started</a>
                        {/* <!-- <a href="#" class="btn btn-light ms-2">Our Portfolio</a> --> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
   </>
  )
}

export default Banner