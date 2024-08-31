import React from 'react'
import img from '../img/teamwork.jpg'
import '../style/Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
  <>
  <footer class="bg-dark">
        <div class="footer-top">
            <div class="container">
                <div class="row gy-5">
                    <div class="col-lg-3 col-sm-6">
                        <a href="#"><img src={img} alt="Hospital"/></a>
                        <div class="line"></div>
                        <div class="social-icons">
                            <a href="https://twitter.com/i/flow/signup?lang=en"><i class="ri-twitter-fill"></i></a>
                            <a href="https://www.instagram.com/accounts/login/?hl=en"><i class="ri-instagram-fill"></i></a>
                            <a href="https://github.com/signup"><i class="ri-github-fill"></i></a>
                            <a href="#"><i class="ri-whatsapp-fill "></i></a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <h5 class="mb-0 text-white">SERVICES</h5>
                        <div class="line"></div>
                        <ul>
                            <Link><a href="#">UI Design</a></Link>
                            <Link><a href="#">Development</a></Link>
                            <Link><a href="#">Research projects</a></Link>
                            <Link><a href="#">digital marketing services</a></Link>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <h5 class="mb-0 text-white">ABOUT</h5>
                        <div class="line"></div>
                        <ul>
                            <Link><a href="#">Our Hospital Management System, the home of innovative healthcare solutions to global issues.</a></Link>
                          
                        </ul>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <h5 class="mb-0 text-white">CONTACT</h5>
                        <div class="line"></div>
                        <ul>
                            <Link>TechiesGroup IT Solution Pvt Ltd</Link>
                            <Link>Address:     21, Nehru Colony, Near Vivekanand Chauraha, Thatipur, GwaLinkor</Link>
                            <Link>Email:     Info@techiesgroup.co.in

                                Web:     <a href="https://www.techiesgroup.co.in/">www.techiesgroup.co.in</a></Link>
                        </ul>
                    </div>
                 
                </div>
            </div>
        </div>
        <div class="footer-down ">
            <div class="footer-down__wrapper ">
                <span> All Right Reserved by TechieShubhdeep IT Solutions. &copy; 2024</span>
         
            </div>
        </div>
    </footer>
  </>
  )
}

export default Footer