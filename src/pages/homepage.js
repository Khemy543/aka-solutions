import React,{ Component } from 'react';
import Header from "../components/header";
import CarouselView from '../components/carousel';
import "../styles/app.css";
import 'font-awesome/css/font-awesome.min.css';
import Footer from "../components/footer";
import { Button  } from 'react-bootstrap';
import {Link} from 'react-router-dom'; 
  



class Homepage extends Component {
    render() {
      return (
        <div>
          
              <Header />
              <main>
              
              <CarouselView />
            

              <section>
            <h2>About Us</h2>
            <div>
             <p>We provide highly qualified and skilled trades personnel for the construction industry. Temporary or permanent placements. We are a recruitment business.We offer skilled and highly qualified staff with competitive rates with a personalised customer service.density, the magnetic field intensity and other such quantities are vectors.
Since these quantities may have an arbitrary orientation in space at any given time, we
need to define a set of three reference directions at every point by which we can describe
vectors drawn to represent these quantities. This unit thus introduces you to the

</p>

            </div>
           
        </section>

<div className="team" >
      <div className="container">
        <div className="row">
          <div className="col-md-4 wow fadeInRight" data-wow-offset="0" data-wow-delay="0.3s">
            <div className="text-center">
              <img src={require("../images/team/team3.jpg")} className="img-responsive" alt=""/>
              <h2>John Doe</h2>
              <h4>Founder & CEO</h4>
              <p>need to define a set of three reference directions at every point by which we can describe</p>
            </div>
          </div>
           <div className="col-md-4 wow fadeInRight" data-wow-offset="0" data-wow-delay="0.3s">
            <div className="text-center">
              <img src={require("../images/team/team2.jpg")} className="img-responsive" alt=""/>
              <h2>John Doe</h2>
              <h4>Creative Director</h4>
              <p>need to define a set of three reference directions at every point by which we can describe</p>
            </div>
          </div>
          <div className="col-md-4 wow fadeInLeft" data-wow-offset="0" data-wow-delay="0.3s">
            <div className="text-center">
              <img src={require("../images/team/team1.jpg")} className="img-responsive" alt=""/>
              <h2>John Smith</h2>
              <h4>Creative Director</h4>
              <p>need to define a set of three reference directions at every point by which we can describe</p>
            </div>
          </div>
          {/* <div className="col-md-3 wow fadeInLeft" data-wow-offset="0" data-wow-delay="0.3s">
            <div className="text-center">
              <img src={require("../images/team/team4.jpg")} className="img-responsive" alt=""/>
              <h2>John Smith</h2>
              <h4>Creative Director</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Fusce fermen tum neque a rutrum varius</p>
            </div>
          </div>  */}
        </div>
      </div>
    </div>


        <div className="section">
        <h2>Our Services</h2>
        <div className="container">
             <div className="row">
                <div className="col-md-4">
                    <div className="info-icon">
                        <div className="icon">
                            <Link to="/ourservices"><i className="fa fa-pencil"></i></Link>
                        </div>
                        <h3>Sales</h3>
                        <p className="description">We make our design perfect for you. Our adjustment turn our clothes into your clothes.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="info-icon">
                        <div className="icon">
                            <Link to="/ourservices"><i className="fa fa-book"></i></Link>
                        </div>
                        <h3>Content</h3>
                        <p className="description">We create a persona regarding the multiple wardrobe accessories that we provide..</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="info-icon">
                        <div className="icon">
                            <Link to="ourservices"><i className="fa fa-music"></i></Link>
                        </div>
                        <h3>Music</h3>
                        <p className="description">We like to present the world with our work, so we make sure we spread the word regarding our clothes.</p>
                    </div>
                </div>
            </div>
        </div>

    </div>


    <div className="parallax-window">
        <div>
            <h2
            style={{fontSize:"60px", textAlign:"center", paddingTop:"150px", color:"white"}}
            >Current Jobs</h2>
            <div 
            style={{textAlign: "center", paddingTop:"30px"}}
            >
            <Button type="submit" 
            style={{padding:"20px 90px" , fontSize:"30px"}}
            >View Jobs</Button>

           <Button type="submit" 
            style={{padding:"20px 90px" , fontSize:"30px" , backgroundColor:"white", color:"#0BA9F9"}}
            >Suscribe</Button>

                </div>

            </div>
    
  </div>




<div className="section" style={{paddingTop:"60px"}}>
    
    <div className="container">
             <div className="row">
                <div className="col-md-4">
                <h3>Contact Us any time</h3>
                        <p className="description">We make our design perfect for you. Our adjustment turn our clothes into your clothes.</p>      
                    </div>

                    <div className="col-md-4">
                    <h3>Contact info</h3>
                        <p className="description"><i className="fa fa-home fa-2x"></i> Office # 38, Suite 54 Elizebth Street, Victoria State Newyork, USA 33026</p>
                        <p className="description"><i className="fa fa-phone fa-2x"></i> +38 000 129900</p>   
                        <p className="description"><i className="fa fa-envelope fa-2x"></i> info@domain.net</p>             
                    </div>

                    <div className="col-md-4">
                    <form action="" method="post" className="contactForm">
              <div className="form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <div className="validation"></div>
              </div>
              <div className="form-group">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                <div class="validation"></div>
              </div>
              <div class="form-group">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div class="validation"></div>
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                <div className="validation"></div>
              </div>

              <Button type="submit" className="btn btn-theme pull-left">SEND MESSAGE</Button>
            </form>
                    </div>


                    </div>
                    </div>

    </div>


    

    
    

<Footer />
              </main>
              </div>
      );
    }
}
export default Homepage;