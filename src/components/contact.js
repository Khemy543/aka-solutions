import React, { Component } from 'react';
import '../styles/app.css';
import { Button  } from 'react-bootstrap';
/* import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'; */



class Contact extends Component {
  render(){
    return(
      <div id = "contact">
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
    {/* <div style={{Height:"440px"}}>
    <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
           
        </InfoWindow>
      </Map>
      </div> */}

      </div>
    );
  }
}
export default Contact;
/* export default GoogleApiWrapper({
    apiKey: ("AIzaSyCZQdWZWsNyaKL3OEbvVherjO4c9HcqFc8")
  })(Contact) */