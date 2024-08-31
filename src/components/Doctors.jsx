import React from 'react'
import img from "../img/business-strategy-success-concept-with-wooden-blocks-grey-white-wall-side-view.jpg"
import img2 from '../img/5881573.jpg'
import img3 from '../img/6205331.jpg'
import '../style/Doctors.css'
const Doctors = () => {
  return (
    <>
      <section id="Teams" class="pt-3">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <div class="section-title">
                        <h1 class="display-4 fw-semibold">Our Teams</h1>
                        <div class="line"></div>
                        <p>Thia is our Hospital Management System Team</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="team-member image-zoom">
                        <div class="image-zoom-wrapper">
                            <img src={img} alt="Development"/>
                        </div>
                        <h5 class="mt-4">Development </h5>
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="team-member image-zoom">
                        <div class="image-zoom-wrapper">
                            <img src={img2} alt="UI Design"/>
                        </div>
                        <h5 class="mt-4">UI Design </h5>
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="team-member image-zoom">
                        <div class="image-zoom-wrapper">
                            <img src={img3} alt="Research projects"/>
                        </div>
                        <h5 class="mt-4">Research projects </h5>
                        <a href="#">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Doctors