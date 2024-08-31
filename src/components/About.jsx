import React from 'react';
import img from '../img/medium-shot-scientists-posing-together.jpg';

const About = () => {
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-4">
            <h1 className="display-4">About Us</h1>
            <div className="bg-primary" style={{ height: '4px', width: '60px', margin: '0.5rem auto' }}></div>
            <p className="lead">
              Welcome to our Hospital Management System (HMS), the home of innovative healthcare solutions to global issues. This all translates to our mission of improving operations in hospitals and the experiences that patients will have throughout their stays as well as equip healthcare givers with the tools they need to offer the best care to patients.
            </p>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img src={img} alt="Hospital team" className="img-fluid rounded shadow-sm" />
            </div>
            <div className="col-md-6">
              <div className="d-flex align-items-start mb-4">
                <div className="me-3">
                  <i className="ri-mail-send-fill display-4 text-primary"></i>
                </div>
                <div>
                  <h5 className="fw-bold">We are Awesome</h5>
                  <p>
                    Our Departments We love to craft digital experiences for brands. Amet fugiat sunt distinctio? Medical Management Cordiality of the transactions, perfection of workflow, disciplined tone, and conservative consumption of resources. Patient Management Scheduling, documentation and person-centered programs to be effective in treating patients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
