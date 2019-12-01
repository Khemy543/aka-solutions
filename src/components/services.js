import React, { Component } from 'react';
import '../styles/app.css';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import { Button  } from 'react-bootstrap';


class Services extends Component {
  render(){
    return(
      <div id = "services">
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
                <Link to = "/ourservices">
            <Button type="submit" 
            style={{fontSize:"20px"}}
            >Request a Callback</Button>
            </Link>
            </div>
            </div>
    
  </div>
      </div>
    );
  }
}
export default Services;