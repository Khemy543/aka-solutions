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
            <h3 style={{fontSize:"18px"}}>Established since 2013</h3>
             <p>We provide highly qualified and skilled trades personnel for the construction industry. Temporary or permanent placements. We are a recruitment business.<br/>Cilantro engineering was our first client our current client is JADEB. My ideal client would be lendlease, bellway homes and ballymore builders.
Some of our clients consists of:

Lendlease	Cilantro	Ballymore
Service plan	British Gas	Network rail
Royal mail	Manpower	Hayes


UPS	DHL.
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
                            <Link to="/ourservices"><i className="fa fa-book"></i></Link>
                        </div>
                        <h3>Profesionalism</h3>
                        <p className="description">We offer skilled and highly qualified staff with competitive rates with a personalised customer service.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="info-icon">
                        <div className="icon">
                            <Link to="/ourservices"><i className="fa fa-pencil"></i></Link>
                        </div>
                        <h3>Clients</h3>
                        <p className="description">Cilantro engineering was our first client our current client is JADEB. My ideal client would be lendlease, bellway homes and ballymore builders</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="info-icon">
                        <div className="icon">
                            <Link to="ourservices"><i className="fa fa-music"></i></Link>
                        </div>
                        <h3>Music</h3>
                        <p className="description">We provide highly qualified and skilled trades personnel for the construction industry.</p>
                    </div>
                </div>
            </div>
        </div>

    </div>


    <div className="parallax-window">
        <div>
           {/*  <h2
            style={{fontSize:"60px", textAlign:"center", paddingTop:"150px", color:"white"}}
            >Current Jobs</h2>
            <div 
            style={{textAlign: "center", paddingTop:"30px"}}
            >
            <Button type="submit" 
            style={{padding:"20px 90px" , fontSize:"30px"}}
            >View Jobs</Button>

           <Button type="submit" 
            style={{padding:"20px 0,0,0" , fontSize:"20px" , backgroundColor:"white", color:"#0BA9F9"}}
            >Suscribe</Button>

                </div>
 */}
   <h2
            style={{fontSize:"40px", textAlign:"left", paddingTop:"70px", paddingLeft:"20px",color:"white"}}
            >Need help finding trade professionals?</h2>

<h2
            style={{fontSize:"30px", textAlign:"left",  paddingLeft:"20px",color:"white"}}
            >We can help you!!</h2>
            <p  style={{fontSize:"25px", textAlign:"left",  paddingLeft:"20px",paddingTop:"30px",color:"white"}}>Personalised customer service</p> 
            <p  style={{fontSize:"25px", textAlign:"left",  paddingLeft:"20px",color:"white"}}>We provide highly qualified and skilled trade personnels.</p> 
            <div style={{paddingTop:"20px", paddingLeft:"20px"}}>
            <Button type="submit" 
            style={{fontSize:"20px"}}
            >Request a Callback</Button>
            </div>
            </div>
    
  </div>




<div className="section" style={{paddingTop:"60px"}}>
    
    <div className="container">
             <div className="row">
                <div className="col-md-4">
                <h3>Contact Us any time</h3>
                        <p className="description">contact us today to find out more, or to receive a quote.</p>      
                    </div>

                    <div className="col-md-4">
                    <h3>Contact info</h3>
                        <p className="description"><i className="fa fa-home fa-2x"></i> Office # 38, Suite 54 Elizebth Street, Victoria State Newyork, USA 33026</p>
                        <p className="description"><i className="fa fa-phone fa-2x"></i>  07956994221</p>   
                        <p className="description"><i className="fa fa-envelope fa-2x"></i>  joseph@akaproductivesolutionsltd.co.uk</p>             
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