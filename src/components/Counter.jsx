import React from "react";
import '../style/Counter.css'
const Counter = () => {
  return (
    <>
      <section id="counter" class="section-padding">
        <div class="container text-center">
          <div class="row g-4">
            <div class="col-lg-3 col-sm-6">
              <h1 class="text-white display-4">90,00+</h1>
              <h6 class="text-uppercase mb-0 text-white mt-3">
                Total Downloads
              </h6>
            </div>
            <div class="col-lg-3 col-sm-6">
              <h1 class="text-white display-4">58K+</h1>
              <h6 class="text-uppercase mb-0 text-white mt-3">
                Trusted Clients
              </h6>
            </div>
            <div class="col-lg-3 col-sm-6">
              <h1 class="text-white display-4">5M+</h1>
              <h6 class="text-uppercase mb-0 text-white mt-3">
                THemes Designed
              </h6>
            </div>
            <div class="col-lg-3 col-sm-6">
              <h1 class="text-white display-4">100+</h1>
              <h6 class="text-uppercase mb-0 text-white mt-3">Team Members</h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
