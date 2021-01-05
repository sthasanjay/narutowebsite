import React from 'react'
import au from './images/au.jpg';
import at from './images/at.jpg';
import av from './images/av.png';
import aw from  './images/aw.jpg';
import panda from '../src/images/panda.png';
import safety from '../src/images/zl.jpg';
const Home = () => {
    
    return (
      <>
        <section id = "header" className = "d-flex align-items-center">
            <div className = "container-fluid nav-bg">
            
                <div className  = "row">
                    <div className = "col-10 mx-auto">
                     <div className = "row">
                        <div className = 'col-lg-6 col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column mt-5'>
                            <h1>
                                lets make the website <strong className = "brand-name">SanjayShrestha</strong>
                            </h1>
                            <h2 className = "my-3">
                                here are many talentd web developer
                            </h2>

                            <div className = "mt-3">
                                <a href = "" className = "btn-get-started">
                                    Get Started
                                </a>
                            </div>
                        </div>

                        <div className = "  col-lg-6 col-md-6  order-1 order-lg-2 header-img ">
                            <img src = {panda} className = "img-fluid animated mx-auto d-block" alt = "homeimg"/>
                        </div>
                    </div>
                    </div>

                    
                </div>
            </div>
        </section>

        <section  className = "d-flex align-items-center">
        
            <div className = "container-fluid nav-bg">
            <div>
        <h1 className = "text-center">About Us</h1>
                  <hr className = "w-25 mx-auto"/>
                  </div>
                <div className  = "row mt-5">
                    <div className = "col-10 mx-auto">
                     <div className = "row">
                        <div className = 'col-lg-4 col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column '>
                        <img src = {safety} className = "img- mx-auto d-block" alt = "homeimg"/>
                          
                        </div>

                        <div className = "  col-lg-8 col-md-6  order-1 order-lg-2 header-img ">
                        <p className ="paddd ">Ut enim is aute irure dolor in reprehenderit in  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodouis aute irure dolor in reprehenderit in voluptate velit ess.
                          Ut enim is aute irure dolor in reprehenderit in  ad minim veniam,Ut enim is aute irure dolor in reprehenderit in  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodouis aute irure dolor in reprehenderit in voluptate velit ess.
                          Ut enim is aute irure dolor in reprehenderit in  ad minim veniam
                           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodouis aute irure dolor in reprehenderit in voluptate velit ess</p>
                        
                        </div>
                    </div>
                    </div>

                    
                </div>
            </div>
        </section>

        <section id = "">
        <div className = "container-fluid nav-bg some">
        <div className="text-center" >
            <h1 >Other Services</h1>
            <hr className = "w-25 mx-auto"/>
        </div>
        <div className  = "row">
            <div className = "col-10 mx-auto">
            <div className="container padded">

                <div class="row">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                        <img src={av} class="img-fluid  rounded-circle"/>
                        <h3>Dracula</h3>
                        <h5>Founder</h5>
                        <p> In reprehenderit in  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodouis aute irure dolor in reprehenderit in voluptate velit ess.</p>
                        <a href="http://www.facebook.com"><i class="fab fa-facebook-f"></i></a>
                        <a href="http://www.twitter.com"><i class="fab fa-twitter"></i></a>
                        <a href="http://www.instagram.com"><i class="fab fa-instagram"></i></a>
                     </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                        <img src={au} class="img-fluid rounded-circle"/>
                        <h3>Anna</h3>
                        <h5>Manager</h5>
                        <p> In reprehenderit in  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodouis aute irure dolor in reprehenderit in voluptate velit ess.</p>
                        <a href="http://www.facebook.com"><i class="fab fa-facebook-f"></i></a>
                        <a href="http://www.twitter.com"><i class="fab fa-twitter"></i></a>
                        <a href="http://www.instagram.com"><i class="fab fa-instagram"></i></a>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                        <img src={aw} class="img-fluid rounded-circle"/>
                        <h3>Jessica</h3>
                        <h5>Enimaute</h5>
                        <p>In reprehenderit in  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodouis aute irure dolor in reprehenderit in voluptate velit ess.</p>
                        <a href="http://www.facebook.com"><i class="fab fa-facebook-f"></i></a>
                        <a href="http://www.twitter.com"><i class="fab fa-twitter"></i></a>
                        <a href="http://www.instagram.com"><i class="fab fa-instagram"></i></a>
                    </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                            <img src={at} class="img-fluid rounded-circle"/>
                            <h3>Luffy</h3>
                            <h5>Laboris nisi</h5>
                            <p>In reprehenderit in  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodouis aute irure dolor in reprehenderit in voluptate velit ess.</p>
                            <a href="http://www.facebook.com"><i class="fab fa-facebook-f"></i></a>
                            <a href="http://www.twitter.com"><i class="fab fa-twitter"></i></a>
                            <a href="http://www.instagram.com"><i class="fab fa-instagram"></i></a>
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

export default Home
