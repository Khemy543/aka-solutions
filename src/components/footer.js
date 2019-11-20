import React, { Component } from 'react';
import '../styles/app.css';
import 'font-awesome/css/font-awesome.min.css';
import {Link} from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
     
      <footer>
      {/* <div>

          <p>Home<br/>About Us<br/>Services<br/>Gallery<br/>Contact Us</p>
       </div> */}

       <div>
         <p>@ 2018 | A.K.A Productive Solutions Ltd<br/>v3.5</p>
       </div>
      <div>
       <h3 style={{fontSize:"18px"}}>Socail Networks</h3>
      
      <ul>
        <li><Link to="#"><i className="fa fa-facebook-f fa-2x" aria-hidden="true"></i></Link></li>
        <li><Link to="#"><i className="fa fa-twitter fa-2x"  aria-hidden="true"></i></Link></li>
        <li><Link to="#"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></Link></li>
      </ul> 
          </div>
      <div>   
      <h3 style={{fontSize:"18px"}}>designed by WEBBEX</h3>
      <p><a href="https://www.instagram.com/webbexgh"style={{color:"white"}}>instagram</a></p>
      </div>
  </footer>
      
    );
  }
}

export default Footer;