import React, { Component } from 'react';
import '../styles/app.css';



class About extends Component {
  render(){
    return(
      <div id = "about">
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
      </div>
    );
  }
}
export default About;