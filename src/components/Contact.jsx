import React from 'react'
import '../style/Contact.css'
const Contact = () => {
  return (
    <>
    <section class="section-padding bg-light" id="contact">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <div class="section-title">
                            <h1 class="display-4 text-white fw-semibold mb-5">Get in touch</h1>
                            <div class="line bg-white"></div>
                             </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <form action="#" class="row g-3 p-lg-5 p-4 bg-white theme-shadow">
                            <div class="form-group col-lg-6">
                                <input type="text" class="form-control" placeholder="Enter first name"/>
                            </div>
                            <div class="form-group col-lg-6">
                                <input type="text" class="form-control" placeholder="Enter last name"/>
                            </div>
                            <div class="form-group col-lg-12">
                                <input type="email" class="form-control" placeholder="Enter Email address"/>
                            </div>
                            <div class="form-group col-lg-12">
                                <input type="text" class="form-control" placeholder="Enter subject"/>
                            </div>
                            <div class="form-group col-lg-12">
                                <textarea name="message" rows="5" class="form-control" placeholder="Enter Message"></textarea>
                            </div>
                            <div class="form-group col-lg-12 d-grid">
                                <button class="btn btn-primary">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact