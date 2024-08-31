import React from 'react'
import '../style/Services.css'

const Services = () => {
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col text-center">
              <h1 className="display-4">Our Departments</h1>
              <div className="underline mx-auto mb-3"></div>
              <p className="lead">We are providing many types of Departments in our Hospital Management System</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 text-center shadow-sm">
                <div className="card-body">
                  <div className="mb-3">
                    <i className="ri-hospital-fill display-4"></i>
                  </div>
                  <h5 className="card-title">Hospital Management</h5>
                  <p className="card-text">This hospital management software is aimed at helping you run your hospital at optimum efficiency and accord your patients the best care possible.</p>
                  <div className="mt-4">
                    <a href="http://127.0.0.1:5500/department.html#hero" className="btn btn-primary">More</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 text-center shadow-sm">
                <div className="card-body">
                  <div className="mb-3">
                    <i className="ri-hospital-fill display-4"></i>
                  </div>
                  <h5 className="card-title">Medical Management</h5>
                  <p className="card-text">Cordiality of the transactions, perfection of workflow, disciplined tone, and conservative consumption of resources.</p>
                  <div className="mt-4">
                    <a href="http://127.0.0.1:5500/department.html#hero" className="btn btn-primary">More</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 text-center shadow-sm">
                <div className="card-body">
                  <div className="mb-3">
                    <i className="ri-hospital-fill display-4"></i>
                  </div>
                  <h5 className="card-title">Patient Management</h5>
                  <p className="card-text">Scheduling, documentation, and person-centered programs to be effective in treating patients.</p>
                  <div className="mt-4">
                    <a href="http://127.0.0.1:5500/department.html#hero" className="btn btn-primary">More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
